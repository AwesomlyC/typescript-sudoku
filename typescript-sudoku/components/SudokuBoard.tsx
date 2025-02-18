import React, {useState} from 'react'
import { generateSudokuBoard } from '@/utils/SudokuGenerator'

const SudokuBoard = () => {
    const [board, setBoard] = useState(generateSudokuBoard());
    const resetBoard = () => {
      console.log("RWKOREK")
      console.log(generateSudokuBoard());
      setBoard(generateSudokuBoard());
    }
  return (
<div>
      <div className='grid grid-cols-9 gap-0 p-6 text-black border-4'>
        {board.map((row, rowIndex) =>
          row.map((num, colIndex) => {
            // Apply thicker borders for 3x3 sections
            const borderClasses = `
              border border-gray-500
              ${rowIndex % 3 === 0 ? "border-t-4 border-black" : ""}
              ${colIndex % 3 === 0 ? "border-l-4 border-black" : ""}
              ${rowIndex === 8 ? "border-b-4 border-black" : ""}
              ${colIndex === 8 ? "border-r-4 border-black" : ""}
            `;
  
            return (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                maxLength={1}
                defaultValue={num !== 0 ? num : ""}
                className={`w-16 h-16 text-xs sm:w-12 sm:h-12 sm:text-lg md:w-16 md:h-16 md:text-xl font-bold text-center ${borderClasses}  bg-white`}
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            );
          })
        )}
  
          
      </div>
      <button className='flex items-center w-[100%] justify-center mt-[2rem] border-white border-2' onClick = {resetBoard}>Reset Board</button>
</div>
  )
}

export default SudokuBoard