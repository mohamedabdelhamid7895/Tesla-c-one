import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_itemsContainer">
        <Item 
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnText='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item 
        title='Model S'
        description='Starting at $69,420'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Model 3'
        description='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title='Model X'
        description='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title='Model Y'
        description='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title='Accessories'
        description=''
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtnText='Existing Inventory'
        rightBtnLink=''
        />
        
      </div>
    </div>
  );
}

export default App;
