import { useState } from 'react';
import { tabTitles, tabs } from './setting';
import { Button } from 'antd';

const TabsLeft = () => {
  const [tab, setTab] = useState('project');

  return (
    <div>
      <div className='tab-title'>
      {tabTitles.map((item, index) => (
        <Button
          style={{
            fontSize: '16px',
          }}
          className={`${index < tabTitles.length - 1 && 'mr-8'} ${
            item.key === tab && 'action-tab-btn'
          }`}
          onClick={() => setTab(item.key)}
        >
          {item.title}
        </Button>
      ))}
      </div>
      {tabs[tab]}
    </div>
  );
};

export default TabsLeft;
