
import React, { useEffect, useRef } from 'react';

const BottleCanvas = ({ rotation, playerCount, isSpinning }) => {
  const bottleRef = useRef(null);

  // Draw circle of players and bottle
  useEffect(() => {
    if (!bottleRef.current) return;
    
    const canvas = bottleRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 30;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw player positions
    for (let i = 0; i < playerCount; i++) {
      const angle = (i / playerCount) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100, 50, 200, 0.7)';
      ctx.fill();
      
      // Add player number
      ctx.font = '12px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((i + 1).toString(), x, y);
    }
    
    // Draw bottle
    const bottleLength = radius * 0.8;
    const bottleWidth = bottleLength * 0.25;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);
    
    // Create gradient for bottle with fixed colors
    const gradient = ctx.createLinearGradient(0, -bottleLength/2, 0, bottleLength/2);
    gradient.addColorStop(0, '#3b82f6');  // Blue color
    gradient.addColorStop(1, '#8b5cf6');  // Purple color
    
    // Draw bottle body (more bottle-shaped)
    ctx.beginPath();
    // Bottle neck
    ctx.moveTo(-bottleWidth/4, -bottleLength/2);
    ctx.lineTo(bottleWidth/4, -bottleLength/2);
    ctx.lineTo(bottleWidth/3, -bottleLength/3);
    ctx.lineTo(-bottleWidth/3, -bottleLength/3);
    ctx.closePath();
    ctx.fillStyle = '#1e40af'; // Darker blue for neck
    ctx.fill();
    
    // Bottle body
    ctx.beginPath();
    ctx.moveTo(-bottleWidth/3, -bottleLength/3);
    ctx.lineTo(bottleWidth/3, -bottleLength/3);
    ctx.lineTo(bottleWidth/2, bottleLength/3);
    ctx.lineTo(bottleWidth/3, bottleLength/2);
    ctx.lineTo(-bottleWidth/3, bottleLength/2);
    ctx.lineTo(-bottleWidth/2, bottleLength/3);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw bottle cap
    ctx.beginPath();
    ctx.moveTo(-bottleWidth/4, -bottleLength/2);
    ctx.lineTo(bottleWidth/4, -bottleLength/2);
    ctx.lineTo(bottleWidth/4, -bottleLength/2 - 10);
    ctx.lineTo(-bottleWidth/4, -bottleLength/2 - 10);
    ctx.closePath();
    ctx.fillStyle = '#0f172a'; // Dark cap color
    ctx.fill();
    
    // Draw pointer/highlight
    ctx.beginPath();
    ctx.moveTo(0, bottleLength/2 + 5);
    ctx.lineTo(5, bottleLength/2);
    ctx.lineTo(-5, bottleLength/2);
    ctx.closePath();
    ctx.fillStyle = '#ef4444'; // Red color for pointer
    ctx.fill();
    
    // Add bottle shine/reflection
    ctx.beginPath();
    ctx.moveTo(-bottleWidth/6, -bottleLength/4);
    ctx.quadraticCurveTo(-bottleWidth/12, 0, -bottleWidth/6, bottleLength/4);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.restore();
  }, [rotation, playerCount]);

  return (
    <canvas 
      ref={bottleRef}
      width={300}
      height={300}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default BottleCanvas;
