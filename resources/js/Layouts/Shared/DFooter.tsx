import React from 'react'

export default function DFooter() {
  return (
    <footer className="footer h-16 flex items-center px-6 bg-white shadow dark:bg-gray-800">
    <div className="flex md:justify-between justify-center w-full gap-4">
        <div>
            <script>
                document.write(new Date().getFullYear())
            </script> © Konrix - <a href="https://coderthemes.com/" target="_blank">Coderthemes</a>
        </div>
        <div className="md:flex hidden gap-4 item-center md:justify-end">
            <a href="javascript: void(0);" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About</a>
            <span className="border-e border-gray-300 dark:border-gray-700"></span>
            <a href="javascript: void(0);" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Support</a>
            <span className="border-e border-gray-300 dark:border-gray-700"></span>
            <a href="javascript: void(0);" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact Us</a>
        </div>
    </div>
</footer>
  )
}
