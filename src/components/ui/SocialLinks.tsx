import IconButton from './IconButton'
import { GitHubIcon, LinkedInIcon, MailFilledIcon } from '../icons'
import { personal } from '../../data/personal'

/**
 * The trio of social icons (GitHub, LinkedIn, Email) shown in the Hero.
 * Reads URLs from the personal data file so links stay in one place.
 */
function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <IconButton href={personal.github} label="GitHub">
        <GitHubIcon className="h-5 w-5" />
      </IconButton>
      <IconButton href={personal.linkedin} label="LinkedIn">
        <LinkedInIcon className="h-5 w-5" />
      </IconButton>
      <IconButton
        href={`mailto:${personal.email}`}
        label="Email"
        external={false}
      >
        <MailFilledIcon className="h-5 w-5" />
      </IconButton>
    </div>
  )
}

export default SocialLinks
