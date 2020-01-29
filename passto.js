import React from 'react';

class PassTo extends Component {
  constructor() {
    super();
    this.state = {
      show: ""
    };
  }

  componentDidMount(){
    this.animation()
  }

  animation = () => {
   let destinoFijo = document.querySelector(".destiny");
    destinoFijo.style.display = "block";
    destinoFijo.style.position = "relative";
    destinoFijo.style.borderRadius = "100%";
    destinoFijo.style.width = "30px";
    destinoFijo.style.height = "30px";
    destinoFijo.style.border = "2px solid #7240CE";

    destinoFijo.animate([
      {
        boxShadow:"inset 0px 0px 0px 10px purple",
        transform: "rotate(350deg) scale(0.8)"
      }, 
      {
        boxShadow:"inset 0px 0px 20px 0px white",
        transform: "rotate(0deg) scale(1.1)"
      }
    ], {
      duration: 1300,
      iterations: 1
    })

    let divanim = document.createElement("div"); 
    divanim.classList.add("Anim");
    divanim.style.borderRadius = "100%";
    this.propsAnimation(divanim);
    
    let divanim2 = document.createElement("div"); 
    divanim2.classList.add("Anim");
    divanim2.style.borderRadius = "0%";
    this.propsAnimation(divanim2);
    
    destinoFijo.appendChild(divanim);
    destinoFijo.appendChild(divanim2)

    divanim2.animate([
      {boxShadow: "inset 0px 0px 40px 0px white", 
      transform : "scale(1) rotate(70deg)",
      transition: "ease 1s"
      },
      {boxShadow: "inset 0px 0px 0px 0px transparent", transform:"scale(1.1) rotate(0deg)",
      transition: "ease 1s"
      }
    ],
      {
        duration:1000,
        iterations:1
      })

    destinoFijo.animate([{opacity:"1"},{opacity:"0"}],{duration:1300,iterations:1})
    
    setTimeout(()=>{
      this.setState({
        show:this.props.c
      })
      destinoFijo.remove()
    },1300)
  }

  propsAnimation(box){
    box.style.position = "absolute";
    box.style.width = "20px";
    box.style.height = "20px";
    box.style.margin = "auto";
    box.style.top = "0";
    box.style.bottom = "0";
    box.style.left = "0";
    box.style.right = "0";
  }

  render() {
    return (
      <div className="App">
        <div className="destiny">
        </div>
        {this.state.show}
      </div>
    );
  }
}

export default PassTo;
