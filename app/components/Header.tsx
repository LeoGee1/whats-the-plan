export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 shadow">
      <h2 className="text-xl font-semibold">What's The Plan</h2>
    </header>
  );
}















// // import { Dispatch, SetStateAction } from "react";

// export default function Header({
//   onToggleSidebar,
// }: {
//   onToggleSidebar: () => void;
// }) {
//   return (
//     <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow px-4 py-3 md:hidden">
//       <button
//         onClick={onToggleSidebar}
//         className="text-gray-900 dark:text-white focus:outline-none"
//         aria-label="Toggle sidebar"
//       >
//         {/* Hamburger icon */}
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>
//       <h1 className="text-xl font-semibold">My App</h1>
//     </header>
//   );
// }
