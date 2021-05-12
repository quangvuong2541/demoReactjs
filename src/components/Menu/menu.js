import React, { Component } from "react";

class Menu extends Component {
  renderProductList() {
    const productsUI = this.props.data.map((item, index) => {
      console.log(item);

      return (
        <div  key={index}>
          <section
            className="align-items-center bg-img bg-img-fixed"
            id="food-menu-section"
            style={{
              backgroundImage:
                "url(assets/katherine-chase-4MMK78S7eyk-unsplash.jpg)",
            }}
          >
            <div className="container">
              <div className="food-menu">
                <h1>
                  What will <span className="primary-color">you</span> eat
                  today?
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque alias aliquam eveniet, iure praesentium dicta ex
                  dolorum inventore itaque minus repudiandae, odio provident?
                  Velit architecto natus expedita non? Odio, dolorum.
                </p>
                <div className="food-category">
                  <div className="zoom play-on-scroll">
                    <button className="active" data-food-type="all">
                      All food
                    </button>
                  </div>
                  <div className="zoom play-on-scroll delay-2">
                    <button data-food-type="salad">Salad</button>
                  </div>
                  <div className="zoom play-on-scroll delay-4">
                    <button data-food-type="lorem">Lorem</button>
                  </div>
                  <div className="zoom play-on-scroll delay-6">
                    <button data-food-type="ipsum">Ipsum</button>
                  </div>
                  <div className="zoom play-on-scroll delay-8">
                    <button data-food-type="dolor">Dolor</button>
                  </div>
                </div>
                <div className="food-item-wrap all">
                  <div className="food-item salad-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                        
           
                        />
                        <img src ={item.img}/>
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="food-item lorem-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/sina-piryae-bBzjWthTqb8-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item ipsum-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/jonathan-farber-OCNqOLeCwOc-unsplash.jpg")',
                          }}
                        ></div>
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item lorem-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/sina-piryae-bBzjWthTqb8-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item dolor-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/carly-jayne-Lv174o7fn7Y-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item salad-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item lorem-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/sina-piryae-bBzjWthTqb8-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-item dolor-type">
                    <div className="item-wrap bottom-up play-on-scroll">
                      <div className="item-img">
                        <div
                          className="img-holder bg-img"
                          style={{
                            backgroundImage:
                              'url("assets/carly-jayne-Lv174o7fn7Y-unsplash.jpg")',
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <div>
                          <h3>Lorem ipsum</h3>
                          <span>120$</span>
                        </div>
                        <div className="cart-btn">
                          <i className="bx bx-cart-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                */}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    });

    return productsUI;
  }

  render() {
    // console.log(this.props.data);
    return (

      <div>

       
        {/* {this.renderProductList()} */}
        <img src={this.props.data.img} alt="product" />
        
        </div>
    
    );
  }
}

export default Menu;
