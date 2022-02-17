import React from 'react';

import { UI } from '../src';

const Rules: React.FC = () => <>Rules</>;

const App: React.FC = () => {
  return (
    <UI
      gameKey="gameKey"
      previewImagesURL={[
        'assets/xiao_treasures/princess.png',
        'assets/xiao_treasures/emperor.png',
        'assets/xiao_treasures/lotus.png',
        'assets/xiao_treasures/teapot.png',
      ]}
      Rules={Rules}
    />
  );
};

export default App;
