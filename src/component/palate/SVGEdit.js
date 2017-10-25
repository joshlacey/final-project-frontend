import React from 'react';
import SVGContainer from './SVGContainer';
import ImageUploader from '../uploader/ImageUploader';
import ColorsContainer from '../uploader/ColorsContainer';
import NoteForm from '../notes/NoteForm'
import ColorTabs from './ColorTabs'
import '../../index.css'

class EditContainer extends React.Component {

  render () {

    return (
      <div className={'svg-edit'}>

          <SVGContainer />

          <div>
            <ImageUploader />
            <ColorsContainer />
          </div>

          <NoteForm />

          <ColorTabs />
      </div>
    )
  }
}

export default EditContainer
