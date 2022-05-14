import React, { useState, useEffect }from 'react';

const Header = () => {
    const [toggleOn, setToggleOn] = useState(true);
	const [ScrollY, setScrollY] = useState(0); 
	const [ScrollActive, setScrollActive] = useState(false); 

	const toggleClass = () => {
		setToggleOn(!toggleOn)
    };


	const handleScroll = () => { 
		console.log(ScrollY)
		if(ScrollY > 125) {
			setScrollY(window.pageYOffset);
			setScrollActive(true);
		} else {
			setScrollY(window.pageYOffset);
			setScrollActive(false);
		}
	}

	useEffect(() => {
		function scrollListener() {  
			window.addEventListener("scroll", handleScroll); 
		} 
		scrollListener(); 
		return () => { 
			window.removeEventListener("scroll", handleScroll); 
		}; 
	});

	return(
		<header id="header">
			<div className={ScrollActive ? 'fixed' : ''}>
				<button className="btn-gnb" onClick={toggleClass}>
					<div className="x"></div>
					<div className="y"></div>
					<div className="z"></div>
				</button>
				<h1 className="logo-origin">LOGO</h1>
				<nav className={toggleOn ? 'gnb' : 'gnb mvOn'}>
					<ul>
						<li><a href="/">Menu 1</a></li>
						<li><a href="/">Menu 2</a></li>
						<li><a href="/">Menu 3</a></li>
						<li><a href="/">Menu 4</a></li>
						<li><a href="/">Menu 5</a></li>
					</ul>
					<button className="btn-close" onClick={toggleClass}>X</button>
				</nav>
			</div>
		</header>
	)
}

export default Header