import React from 'react'
import { uploadImage, searchColors } from '../../actions/uploader'
import { connect } from 'react-redux'
import '../../index.css'

class ImageUploader extends React.Component {

  state = {
    url: ""
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      url: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.url !== "") {
      this.props.searchColors(this.state.url)
    } else {
      alert("Please enter a valid url")
    }

  }

  render() {

    return (
      <div className={'image-form'}>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder={'Image URL'}/>
          <button className={'nice-button'} type='submit'>Sample ></button>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    uploadImage: (img) => {
      dispatch(uploadImage(img))
    },
    searchColors: (url) => {
      dispatch(searchColors(url))
    }
  }
}



export default connect(null, mapDispatchToProps)(ImageUploader)
