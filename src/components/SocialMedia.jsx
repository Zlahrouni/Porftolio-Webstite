import React from 'react'
import { BsTwitter, BsGithub} from 'react-icons/bs'
import { FaLinkedin} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://twitter.com/LahrouniZiad" target="__blank"><BsTwitter/></a> 
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ziad-lahrouni/" target="__blank"><FaLinkedin/></a>
        </div>
        <div>
          <a href="https://github.com/Zlahrouni"><BsGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia

