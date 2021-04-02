import React from 'react'

const ImageUpload3 = () => {

	  
		return (
<form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" accept="image/*" name="photo" />
        <input type="submit" value="upload"/>
</form>
		)
	  }


export default ImageUpload3