import { UserInfoResponse } from '@/types/userinfo';
import { STORAGE_USERINFO_KEY } from '@/utils/constants/index';
import { Avatar } from 'antd';
import cls from 'classnames';
import { useEffect, useState } from 'react';

function UserBar({ onlyAvatar = false }) {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>();
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem(STORAGE_USERINFO_KEY) ?? '');
      setUserInfo(user);
    } catch {
      return undefined;
    }
  }, []);

  // TODO: delete unused function
  // const logout = () => {
  //   localStorage.removeItem(STORAGE_USERINFO_KEY);
  //   window.location.href = `${process.env.LOGOUT_URL}&goto=${encodeURIComponent(window.location.href)}`;
  // };

  return (
    <div className='flex flex-1 items-center justify-center'>
      <div
        className={cls('flex items-center group w-full justify-center', {
          'justify-center': onlyAvatar,
          'justify-between': !onlyAvatar,
        })}
      >
        <span className='flex gap-2 items-center'>
          <Avatar src='/pictures/user_avator.png' className='cursor-pointer'>
            {userInfo?.nick_name}
          </Avatar>
          <span
            className={cls('text-sm', {
              hidden: onlyAvatar,
            })}
          >
            {userInfo?.nick_name}
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserBar;
