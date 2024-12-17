"use dom";

import React, { FC } from 'react'
import { Link } from '../Link/Link';

interface ProfileAvatarProps {
    avatar: string
}

const ProfileAvatar:FC<ProfileAvatarProps> = ({
  avatar
}) => {
  return (
    <Link href='/' className='rounded-lg h-16 w-16'>
      O
    </Link>
  )
}

export default ProfileAvatar