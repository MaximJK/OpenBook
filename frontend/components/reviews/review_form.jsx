import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.review;
    
    }
    defineAction(){
        if (this.props.type.type === 'save') {
            return this.props.createReview
        } else {
            return this.props.updateReview
        }
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        let action = this.defineAction()
        action(this.state).then(() => this.props.history.push(`/books/${this.state.book_id}`));
    }

    render () {
         debugger
        return (
            <div id="review-form">
                <form onSubmit={this.handleSubmit}>
                    <div id="rating-eles">
                    <label id="my-rating">My rating:</label> 
                    <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" onChange={this.update('rating')} />
                            <label htmlFor="star5" title="text"></label>
                            <input type="radio" id="star4" name="rate" value="4" onChange={this.update('rating')} />
                            <label htmlFor="star4" title="text"></label>
                            <input type="radio" id="star3" name="rate" value="3" onChange={this.update('rating')} />
                            <label htmlFor="star3" title="text"></label>
                            <input type="radio" id="star2" name="rate" value="2" onChange={this.update('rating')} />
                            <label htmlFor="star2" title="text"></label>
                            <input type="radio" id="star1" name="rate" value="1" onChange={this.update('rating')} />
                            <label htmlFor="star1" title="text"></label>
                        </div>
                    </div>
                        <br/>
                    <div id='review-question'>
                    <label>What did you think?
                    </label>
                    </div>
                   <div>
                        <textarea
                            className="review-text"
                            placeholder="Enter your review"
                            value={this.state.body}
                            rows="12"
                            onChange={this.update('body')}
                         />
                    </div>

                    <input className="submit"  type="submit" value={this.props.type.type} />
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);