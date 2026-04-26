import React, { useState } from 'react';
import { Minus, Square, X, RotateCcw } from 'lucide-react';

export default function TicTacToe({ onClose, onMinimize }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && !board.includes(null);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game Draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div style={{...styles.windowFrame, ...(isMaximized ? styles.maximized : styles.normal)}}>
      <div style={styles.titleBar}>
        <div style={styles.titleBarLeft}>
          <span style={styles.titleText}>Tic-Tac-Toe</span>
        </div>
        <div style={styles.titleBarRight}>
          <div style={styles.controlIcon} onClick={onMinimize}><Minus size={16} /></div>
          <div style={styles.controlIcon} onClick={() => setIsMaximized(!isMaximized)}><Square size={13} /></div>
          <div style={{...styles.controlIcon, ...styles.closeIcon}} onClick={onClose}><X size={16} /></div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.gameContainer}>
          <div style={styles.status}>{status}</div>
          <div style={styles.board}>
            {board.map((square, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.square, 
                  color: square === 'X' ? '#0078D4' : '#e81123'
                }} 
                onClick={() => handleClick(i)}
              >
                {square}
              </div>
            ))}
          </div>
          <button style={styles.resetBtn} onClick={resetGame}>
            <RotateCcw size={16} style={{marginRight: 8}} /> Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  windowFrame: {
    backgroundColor: '#f3f2f1',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 0.3s ease',
    border: '1px solid #d4d4d4',
  },
  normal: {
    width: '400px',
    height: '480px',
    top: '20%',
    left: '30%',
  },
  maximized: {
    width: '100%',
    height: 'calc(100% - 48px)',
    top: 0,
    left: 0,
    borderRadius: 0,
  },
  titleBar: {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0078d4',
    color: 'white',
    paddingLeft: '12px',
    userSelect: 'none',
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '14px',
    fontWeight: '500',
  },
  titleBarRight: {
    display: 'flex',
    height: '100%',
  },
  controlIcon: {
    width: '46px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'white',
  },
  closeIcon: {
    '&:hover': {
      backgroundColor: '#e81123',
    }
  },
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  status: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    backgroundColor: '#333',
    padding: '8px',
    borderRadius: '8px',
  },
  square: {
    width: '80px',
    height: '80px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
    userSelect: 'none',
    transition: 'background-color 0.2s',
  },
  resetBtn: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#0078D4',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 120, 212, 0.3)',
    transition: 'transform 0.1s',
  }
};
