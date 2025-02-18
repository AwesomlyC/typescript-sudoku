import SudokuBoard from "@/components/SudokuBoard";
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold'>Sudoku built with TypeScript</h1>
        <SudokuBoard />
    </div>
  );
}
