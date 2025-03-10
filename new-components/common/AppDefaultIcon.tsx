import Image from 'next/image';
import React, { useCallback } from 'react';

const AppDefaultIcon: React.FC<{ scene: string; width?: number; height?: number }> = ({ width, height, scene }) => {
  const returnComponent = useCallback(() => {
    let prefix = '/pictures/';

    switch (scene) {
      case 'chat_knowledge':
        prefix += 'app_chat_knowledge.svg';
        break;
      case 'chat_with_db_execute':
        prefix += 'app_chat_with_db_execute.svg';
        break;
      case 'chat_excel':
        prefix += 'app_chat_excel.svg';
        break;
      case 'chat_with_db_qa':
      case 'chat_dba':
        prefix += 'app_chat_dba.svg';
        break;
      case 'chat_dashboard':
        prefix += 'app_chat_dashboard.svg';
        break;
      case 'chat_agent':
        prefix += 'app_chat_agent.svg';
        break;
      case 'chat_normal':
        prefix += 'app_chat_normal.svg';
        break;
    }
    return prefix;
  }, [scene]);

  const w = (width || 7) * 4;
  const h = (height || 7) * 4;

  return <Image src={returnComponent()} alt='' width={w} height={h} className={`w-${width || 7} h-${height || 7} `} />;
  // return <Icon className={`w-${width || 7} h-${height || 7}`} component={returnComponent()} />;
};

export default AppDefaultIcon;
