import React from 'react'

import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={event => {
            console.log(`event`, event)
          }}
          size={ButtonSize.Larger}
        >
          Larger按钮123
        </Button>
        <Button disabled>按钮2</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          按钮3
        </Button>
        <Button btnType={ButtonType.Link} disabled>
          link
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          link baidu
        </Button>
      </header>
    </div>
  )
}

export default App
