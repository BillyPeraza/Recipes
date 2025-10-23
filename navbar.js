function createNavbar(activePage = "family") {
  const navbar = `
    <div class="navbar bg-base-100 shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="index.html">Family</a></li>
            <li><a href="mexican.html">Mexican</a></li>
            <li><a href="italian.html">Italian</a></li>
            <li><a href="meal-prep.html">Meal Prep</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="index.html" class="${activePage === "family" ? "font-bold" : ""}">Family</a></li>
          <li><a href="mexican.html" class="${activePage === "mexican" ? "font-bold" : ""}">Mexican</a></li>
          <li><a href="italian.html" class="${activePage === "italian" ? "font-bold" : ""}">Italian</a></li>
          <li><a href="meal-prep.html" class="${activePage === "meal-prep" ? "font-bold" : ""}">Meal Prep</a></li>      
        </ul>
      </div>
      <div class="navbar-end"></div>
    </div>
  `;

  document.getElementById("navbar-placeholder").innerHTML = navbar;
}
