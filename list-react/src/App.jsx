import List from './List2.jsx'

function App(){
  const fruits = [{id:1,name:"apple",calories:95},//An array of objects
               {id:2,name:"orange",calories:45},
                {id:3,name:"banana",calories:105},
                {id:4,name:"coconut",calories:159},
                {id:5,name:"pineapple",calories:37}];

  const vegetables= [{id:6,name:"potato",calories:110},//An array of objects
                {id:7,name:"celery",calories:15},
                 {id:8,name:"carrots",calories:25},
                 {id:9,name:"corn",calories:63},
                 {id:10,name:"brocolli",calories:50}];

    return(
      <>
      {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      </>
    );
}

export default App