const Header = ({ cantidad, mensaje, switchButton, onSearch }) => {
  return (
    
    <header className="container_front_main">
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-8">
            <div className="logo"><a href="index-2.html"><img src="images/logo.png" alt="logo" title="logo" /></a></div>
          </div>
          <div className="col-md-7 col-sm-7 col-xs-4">
          
            <ul>
              <li className="hidden-xs"><a href="#"><i className="fas fa-headset"></i> Support</a></li>
              <li className="hidden-xs"><a href="#"><i className="fas fa-sign-in-alt"></i> Customer Login</a></li>
              <li className="hidden-xs hidden-sm"><a href="#"><i className="fas fa-comment-alt"></i> Live Chat Online</a></li>
              <li className="cart"><a href={`${switchButton}`} id="switch" classNameName="btn btn-info hooverShadow">
                {mensaje} ({cantidad})
              </a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    <div className="main_menu">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sronly">Menu</span> <i className="fa fa-bars" aria-hidden="true"></i></button>
              </div>
              <nav className="navbar navbar-default">
                <div id="navbar-collapse-1" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home </a>
                     
                    </li>
                    <li><a href="#">Domain </a>
                      
                    </li>
                    <li><a href="#">Hosting <b className="caret"></b></a>
                      <ul className="wm-dropdown-menu">
                        <li><a href="shared-hosting.html">Shared Hosting 1</a></li>
                        <li><a href="shared-hosting-2.html">Shared Hosting 2</a></li>
                        <li><a href="reseller-hosting.html">Reseller Hosting 1</a></li>
                        <li><a href="reseller-hosting-2.html">Reseller Hosting 2</a></li>
                        <li><a href="wordpress-hosting.html">Wordpress Hosting 1</a></li>
                        <li><a href="wordpress-hosting-2.html">Wordpress Hosting 2</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Servers <b className="caret"></b></a>
                      <ul className="wm-dropdown-menu">
                        <li><a href="dedicated-servers.html">Dedicated Servers 1</a></li>
                        <li><a href="dedicated-servers-2.html">Dedicated Servers 2</a></li>
                        <li><a href="vps.html">VPS Servers 1</a></li>
                        <li><a href="vps-2.html">VPS Servers 2</a></li>
                        <li><a href="cloud-hosting.html">Cloud Hosting 1</a></li>
                        <li><a href="cloud-hosting-2.html">Cloud Hosting 2</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Security  <b className="caret"></b></a>
                      <ul className="wm-dropdown-menu">
                        <li><a href="ssl-security.html">SSL Security</a></li>
                      </ul>
                    </li>
                    <li><a href="#">WHMCS <b className="caret"></b></a>
                      <ul className="wm-dropdown-menu">
                        <li><a href="#">Announcements </a></li>
                        <li><a href="#">Knowledgebase </a></li>
                        <li><a href="#">Network Status </a></li>
                        <li><a href="#">Affiliates </a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </li>
                    <li><a href="about-us.html">About Us</a></li>
                  </ul>
                  <ul className="nav navbar-nav pull-right">
                    <li className="active"><a href="#">Account <b className="caret"></b></a>
                      <ul className="wm-dropdown-menu right">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Forgot Password?</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
