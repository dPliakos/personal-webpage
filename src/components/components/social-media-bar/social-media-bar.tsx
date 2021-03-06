import React from 'react';
import { graphql } from 'gatsby';
import { Facebook, Twitter, Linkedin, Mail, GitHub, Gitlab } from 'react-feather';
import SocialMediaList from './../social-media-list/social-media-list';

import './social-media-bar.scss';

export interface SocialMedia {
  medium: string,
  label: string,
  link: string,
  icon?: string
}

interface SocialMediaItemProps {
  item: SocialMedia
}

interface ScoailMediaBarProps {
  socialMedia: [SocialMedia]
}

const SocialMediaItem: any = (props: SocialMediaItemProps) => {
  // todo add a better implementation
  let icon = null;

  const iconProps = {
    strokeWidth: "1.5",
    className: "social-media-bar__icon"
  }

  if (props.item.icon) {
    switch(props.item.icon) {
      case 'facebook': icon = <Facebook {...iconProps} />;
      break;
      case 'twitter': icon = <Twitter {...iconProps} />;
      break;
      case 'linked-in': icon = <Linkedin  {...iconProps} />;
      break;
      case 'mail': icon = <Mail  {...iconProps} />;
      break;
      case 'github': icon = <GitHub {...iconProps} />;
      break;
      case 'gitlab': icon = <Gitlab {...iconProps} />;
      break;
      default: icon = null;
    }
  }

  return (
    <a
      href={props.item.link}
      target="_blank"
      className="social-media-bar__item"
      title={props.item.label}
    >
      {icon}
    </a>
  );
}

const SocialMediaBar = (props: ScoailMediaBarProps) =>  {
  const media = props.socialMedia.filter((item) => {
    return item.medium !== 'email';
  }).map((item, i) => {
    const mediaItem = <SocialMediaItem item={item} key={i} />;
    return mediaItem;
  });

  const mails = props.socialMedia.filter((item) => {
    return item.medium === 'email';
  });

  return (
    <div className="social-media-bar">
      {media}
      <SocialMediaList icon={Mail} items={mails} />
    </div>
  );
}

export default SocialMediaBar;


export const query = graphql`
  fragment FragmentSocialMedia on SocialMediaJson {
    social_media {
      medium
      label
      link
      icon
    }
  }
`;
