import { EllipsisOutlined } from '@ant-design/icons';
import { Divider, DropDownProps, Dropdown, Tooltip, Typography } from 'antd';
import cls from 'classnames';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';

import AppDefaultIcon from '../AppDefaultIcon';
import './style.css';

const BlurredCard: React.FC<{
  RightTop?: React.ReactNode;
  Tags?: React.ReactNode;
  LeftBottom?: React.ReactNode;
  RightBottom?: React.ReactNode;
  rightTopHover?: boolean;
  name: string;
  description: string | React.ReactNode;
  logo?: string;
  onClick?: () => void;
  className?: string;
  scene?: string;
  code?: string;
}> = ({
  RightTop,
  Tags,
  LeftBottom,
  RightBottom,
  onClick,
  rightTopHover = true,
  logo,
  name,
  description,
  className,
  scene,
  code,
}) => {
    if (typeof description === 'string') {
      description = (
        <p className='line-clamp-2 relative bottom-4 text-ellipsis min-h-[40px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]'>
          {description}
        </p>
      );
    }

    return (
      <div className={cls('hover-app-uptown  flex justify-center mt-6 relative group w-1/4', className)}>
        <div
          onClick={onClick}
          className='backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-xl shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60'
        >
          <div className='flex items-end relative bottom-8 justify-between w-full'>
            <div className='flex items-end gap-4 w-11/12  flex-1'>
              <div className='rounded-xl  w-16 h-16 flex items-center'>
                {scene ? (
                  <AppDefaultIcon scene={scene} width={16} height={16} />
                ) : (
                  logo && <Image src={logo} width={64} height={64} alt={name} className='w-16 min-w-8 max-w-none' />
                )}
              </div>
              <div className='flex-1'>
                {/** 先简单判断下 */}
                {name.length > 6 ? (
                  <Tooltip title={name}>
                    <span
                      className='line-clamp-1 text-ellipsis font-semibold text-base'
                      style={{
                        maxWidth: '60%',
                      }}
                    >
                      {name}
                    </span>
                  </Tooltip>
                ) : (
                  <span
                    className='line-clamp-1 text-ellipsis font-semibold text-base'
                    style={{
                      maxWidth: '60%',
                    }}
                  >
                    {name}
                  </span>
                )}
              </div>
            </div>
            <span
              className={cls('shrink-0', {
                hidden: rightTopHover,
                'group-hover:block': rightTopHover,
              })}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {RightTop}
            </span>
          </div>
          {description}
          <div className='relative bottom-2'>{Tags}</div>
          <div className='flex justify-between items-center'>
            <div>{LeftBottom}</div>
            <div>{RightBottom}</div>
          </div>
          {code && (
            <>
              <Divider className='my-3' />
              <Typography.Text copyable={true} className='absolute bottom-1 right-4 text-xs text-gray-500'>
                {code}
              </Typography.Text>
            </>
          )}
        </div>
      </div>
    );
  };

const ChatButton: React.FC<{
  onClick?: () => void;
  Icon?: React.ReactNode | string;
  text?: string;
}> = ({ onClick, Icon = '/pictures/card_chat.png', text = t('start_chat') }) => {
  if (typeof Icon === 'string' && Icon.length) {
    Icon = <Image src={Icon as string} alt={Icon as string} width={17} height={15} />;
  }

  return (
    <div
      className='flex items-center gap-1 text-default'
      onClick={e => {
        e.stopPropagation();
        onClick && onClick();
      }}
    >
      {Icon}
      <span className='gradient-text-container'>{text}</span>
    </div>
  );
};

const InnerDropdown: React.FC<{ menu: DropDownProps['menu'] }> = ({ menu }) => {
  return (
    <Dropdown
      menu={menu}
      getPopupContainer={node => node.parentNode as HTMLElement}
      placement='bottomRight'
      autoAdjustOverflow={false}
    >
      <EllipsisOutlined className='p-2 hover:bg-white hover:dark:bg-black rounded-md' />
    </Dropdown>
  );
};

export { ChatButton, InnerDropdown };
export default BlurredCard;
