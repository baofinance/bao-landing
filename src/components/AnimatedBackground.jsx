import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const codeLines = [
  'function mint(uint256 amount) public {',
  '  require(amount > 0, "Amount must be positive");',
  '  _mint(msg.sender, amount);',
  '  emit Minted(msg.sender, amount);',
  '}',
  '',
  'contract BaoToken is ERC20 {',
  '  constructor() ERC20("Bao", "BAO") {',
    '    _mint(msg.sender, 1000000 * 10**decimals());',
  '  }',
  '}',
  '',
  'function stake(uint256 amount) external {',
  '  require(amount > 0, "Cannot stake 0");',
  '  require(balanceOf(msg.sender) >= amount, "Insufficient balance");',
  '  _transfer(msg.sender, address(this), amount);',
  '  userStakes[msg.sender] += amount;',
  '  emit Staked(msg.sender, amount);',
  '}',
];

export function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let currentLine = 0;
    let currentChar = 0;
    let lineHeight = 20;
    let yOffset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.4; // 40% of screen width
      canvas.height = window.innerHeight;
      ctx.font = '14px monospace';
      ctx.fillStyle = 'rgba(226, 26, 83, 0.25)'; // BAO red with low opacity
      lineHeight = 20;
      yOffset = canvas.height / 3; // Start one-third down the screen
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawCode = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const totalLines = Math.ceil(canvas.height / lineHeight) + 1;
      const startLine = Math.floor(yOffset / lineHeight);

      for (let i = 0; i < totalLines; i++) {
        const lineIndex = (startLine + i) % codeLines.length;
        const y = i * lineHeight - (yOffset % lineHeight);
        
        if (lineIndex === currentLine) {
          const partialLine = codeLines[lineIndex].substring(0, currentChar);
          ctx.fillText(partialLine, 10, y);
        } else {
          ctx.fillText(codeLines[lineIndex], 10, y);
        }
      }

      currentChar++;
      if (currentChar > codeLines[currentLine].length) {
        currentLine = (currentLine + 1) % codeLines.length;
        currentChar = 0;
      }

      yOffset += 0.5; // Slow upward scroll
      if (yOffset >= codeLines.length * lineHeight) {
        yOffset = 0;
      }

      animationFrameId = requestAnimationFrame(drawCode);
    };

    drawCode();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <canvas ref={canvasRef} className={styles.codeCanvas} />
    </div>
  );
}
