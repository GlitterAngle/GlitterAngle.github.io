import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <div class="fixed top-0 left-0 right-0">
        <section class="relative mx-auto">

          <nav class="flex justify-between text-[#4A4453]">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="#">
                <img class="h-12" src="src/assets/Logo/logo-2-png.png" alt="logo" />
              </a>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link to="/" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">Home</Link></li>
                <li><Link to="/about" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">About</Link></li>
                <li><Link to="/projects" class="hover:text-[#805A73] hover:underline text-[#4A4453]" href="#">Projects</Link></li>
                {/* <li><a class="hover:text-gray-200" href="#">Contact Us</Link></li> */}
              </ul>

              <div class="hidden xl:flex items-center space-x-5 items-center">
                <a class="flex items-center hover:underline" href="https://www.linkedin.com/in/lesley-rotonto/">
                  <img class='h-8' src='src/assets/social_logos/LI-In-Bug-purple-png.png' alt='linkedin' />
                </a>

                <a class="flex items-center hover:text-[#805A73]" href="https://github.com/GlitterAngle">
                  <img class='h-8' src='src/assets/social_logos/github-mark-purple-png.png' alt='github' />
                </a>

              </div>
            </div>

            <a class="xl:hidden flex mr-6 items-center  hover:underline" href="https://www.linkedin.com/in/lesley-rotonto/">
              <img class='h-8' src='src/assets/social_logos/LI-In-Bug-purple-png.png' alt='linkedin' />
            </a>
            <a class="xl:hidden flex mr-6 items-center hover:text-[#805A73]" href="https://github.com/GlitterAngle">
              <img class='h-8' src='src/assets/social_logos/github-mark-purple-png.png' alt='github' />
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#4A4453] hover:text-[#805A73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </nav>

        </section>
      </div>
    </div>
  )
}

export default Nav