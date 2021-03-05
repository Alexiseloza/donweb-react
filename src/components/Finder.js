import React from 'react';

const Finder = ({onSearch}) => {
    return ( 
<div class="header_search_box">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
      <input
                
                onChange={onSearch}
                type="text"
                name="search"
                placeholder="Buscar"
              />
        <select>
          <option>.com</option>
          <option>.net</option>
          <option>.in</option>
          <option>.org</option>
          <option>.co.in</option>
          <option>.net.in</option>
        </select>
        
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12 hidden-xs">
        <ul>
          <li><a href="register-domain.html"><img src="images/com-doamin.png" alt="" title=""/> <strong>$0.59</strong></a></li>
          <li><a href="register-domain.html"><img src="images/xyz.png" alt="" title=""/> <strong>$1.14</strong></a></li>
          <li><a href="register-domain.html"><img src="images/in-domain.png" alt="" title=""/> <strong>$0.72</strong></a></li>
          <li><a href="register-domain.html"><img src="images/co-in.png" alt="" title=""/> <strong>$1.29</strong></a></li>
          <li><a href="register-domain.html"><img src="images/store.png" alt="" title=""/> <strong>$3.72</strong></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
     );
}
 
export default Finder;