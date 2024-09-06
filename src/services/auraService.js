import { request, gql } from 'graphql-request';

const AURA_API_URL = 'https://api.aura.finance/api/v1/pools';

async function fetchPoolData() {
  try {
    console.log('Fetching pool data');
    const response = await fetch('/api/aura-pools');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched pools:', data.length);
    return data;
  } catch (error) {
    console.error('Error fetching pool data:', error);
    throw new Error(`Failed to fetch pool data: ${error.message}`);
  }
}

function filterPools(pools, targetToken) {
  return pools.filter(pool => 
    pool.tokens.some(token => token.symbol.toLowerCase().includes(targetToken.toLowerCase())) &&
    !pool.tokens.some(token => token.symbol.toLowerCase() === 'bao')
  );
}

function calculateBALAPR(rewardRate, rewardTokenPrice, poolTVL) {
  const rewardPerYear = rewardRate * (86400 * 365);
  const rewardPerYearUsd = rewardPerYear * rewardTokenPrice;
  return (rewardPerYearUsd / poolTVL) * 100;
}

function getAuraMintAmount(balAmount, globalData) {
  const { auraTotalSupply, balTotalSupply } = globalData;
  // This is a simplified version of the minting logic
  // You may need to adjust this based on Aura's exact minting formula
  const mintRatio = auraTotalSupply / balTotalSupply;
  return balAmount * mintRatio;
}

function calculateAURAAPR(balRewardPerYear, auraPrice, tvl, globalData) {
  const auraPerYear = getAuraMintAmount(balRewardPerYear, globalData);
  const auraPerYearUsd = auraPerYear * auraPrice;
  return (auraPerYearUsd / tvl) * 100;
}

function calculateTotalAPR(pool, globalData) {
  const balAPR = calculateBALAPR(pool.rewardRate, pool.rewardTokenPrice, pool.tvl);
  const auraAPR = calculateAURAAPR(pool.rewardRate * (86400 * 365), pool.auraPrice, pool.tvl, globalData);
  return balAPR + auraAPR;
}

async function getHighestAPRForToken(targetToken, globalData) {
  const pools = await fetchPoolData();
  const filteredPools = filterPools(pools, targetToken);
  const aprs = filteredPools.map(pool => calculateTotalAPR(pool, globalData));
  return Math.max(...aprs);
}

async function fetchGlobalData() {
  try {
    const response = await fetch('/api/aura-global');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      auraTotalSupply: data.auraTotalSupply,
      balTotalSupply: data.balTotalSupply,
      auraRewardRate: data.auraRewardRate,
      // Add any other global data fields you need
    };
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw new Error(`Failed to fetch global data: ${error.message}`);
  }
}

export async function getHighestAPRs() {
  try {
    const globalData = await fetchGlobalData();
    console.log('Global data:', globalData);

    const pools = await fetchPoolData();
    console.log('Pool data:', pools[0]); // Log the first pool to check its structure

    const ethAPR = await getHighestAPRForToken('baoETH', globalData);
    const usdAPR = await getHighestAPRForToken('baoUSD', globalData);
    console.log('Calculated APRs:', { ethAPR, usdAPR });

    return { ethAPR, usdAPR };
  } catch (error) {
    console.error('Error getting highest APRs:', error);
    throw error;
  }
}
