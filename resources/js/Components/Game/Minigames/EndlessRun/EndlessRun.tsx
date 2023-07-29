import React, { useRef } from 'react';
import { Avatar } from '../../Avatar';
import "./EndlessRun.scss";
import { useInterval } from './utils/UseInterval';
import { elementsColliding } from './utils/Colide';
import { Button } from 'antd';
import { Link } from '@inertiajs/react';
import BG from "@/Pages/Game/Minigame/Assets/Images/background.svg";

export default function EndlessRun() {
  const [gameover, setGameover] = React.useState(false); // [state, setState
  const [score, setScore] = React.useState(0); // [state, setState
  const [jump, setJump] = React.useState(false);
  const chara: React.RefObject<HTMLDivElement> = useRef(null);
  const block: React.RefObject<HTMLImageElement> = useRef(null);

  useInterval(() => {
    if (elementsColliding(block, chara)) {
      setGameover(true);
    }
    score > 1000 ? setScore(1000) : setScore(score + 1);
  }, 100);

  if (!gameover) {
    return (
      <div id='EndlessRunWrapper'
        onClick={() => {
          setJump(true);
          setTimeout(() => {
            setJump(false);
          }, 600);
        }}
      >
        <div id='EndlessRunComponent'
        >
          <img src={BG} id="bg" />
          <div id='Score'>
            <h1>{score}</h1>
          </div>
          <div id='Chara'
            ref={chara}
            className={jump ? 'jump' : "idle"}
          >
            <Avatar size='0.3' />
          </div>
          <div
            ref={block}
            id='Block' />
        </div>
      </div>
    )
  }
  else {
    return (
      <div id='GameOver'>
        <h1 id='GameOver_title'>Game Over</h1>
        <button className='button_cta'

          onClick={() => {
            window.location.reload();
          }}
        >Play Again</button>
        <Link
          href='/game/minigames'
          className='button_cta'
        >Exit</Link>
      </div>
    )
  }
}
