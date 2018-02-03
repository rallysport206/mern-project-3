import React, { Component } from 'react';

class BusinessResults extends Component{
  render(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="card horizontal">
            <div className="card-image">
              <img src={this.props.business.image_url} alt={this.props.business.name} />
            </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <ul>
                      <li className="restaurant-results">
                        <h5>{this.props.business.name}</h5>
                        <span><p>Category: <bold>{this.props.business.categories[0].title} </bold>
                        | Rating: {this.props.business.rating}</p></span>
                      </li>
                    </ul>
                  </div>
                    <ul>
                      <li className="restaurant-results">
                      <div className="card-action">
                        <a href={this.props.business.url}><img className="yelp" src="https://i.imgur.com/cSLthnw.png" /></a>
                        <input type="button" value="save" id={this.props.business.id} onClick={this.props.saveClick} />
                        <hr />
                      </div>
                        </li>
                    </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessResults;
