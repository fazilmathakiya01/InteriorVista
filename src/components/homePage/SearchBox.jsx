export default function SearchBox() {
  return (
    <>
       <div id="smallContainer">
    <form action="#" id="formData">

      <div class="form-group">
        <label for="SearchWork">Search Work By Title</label>
        <input style={{height:20}} id="SearchTitle" type="text" placeholder="Typ any work title..."></input>
      </div>
    
      <div class="form-group">
        <label for="ChooseCategory">Choose Category</label>
        <select id="Category">
          <option value="" disabled selected>Choose Category</option>
          <option value="interior">Interior Design</option> 
          <option value="architecture">Exterior Design</option> 
          <option value="home-decor">New Ideas</option> 
          <option value="office-design">Trendy Design</option>
        </select>
      </div>
    
      <div class="form-group">
        <label for="Price">Price Range</label>
        <select id="Price">
          <option value="" disabled selected>Choose Price</option>
          <option value="$100 – $250">$100 – $250</option> 
          <option value="$250 – $500">$250 – $500</option> 
          <option value="500 – $1000">$500 – $1000</option> 
          <option value="$1000+">$1000+</option>
        </select>
      </div>
    
      <div class="form-group">
        <label for="Plan">Pick a Plan</label>
        <select style={{width:250}} id="Plan">
          <option value="">Pick a Plan</option>
          <option>Standard</option>
          <option>Professional</option>
          <option>Golden</option>
          <option>Premium</option>
        </select>
      </div>
    
      <div id="serchBox">
        <input id="serchButton" type="submit" value="Search Now"></input>
      </div>
    </form>
    
    </div>
    </>
   
  );
}
