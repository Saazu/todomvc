import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <div>
      <div className={css(styles.body)}>
        <div className={css(styles.header)}>
          <p>todo</p>
        </div>
        {/**Input display */}
        <div>
          <div className={css(styles.inputBox)}>
            <input className={css(styles.inputContent)} placeholder="What needs to be done?"/>
          </div>
          <div className={css(styles.listFooter)}>
            <div className={css(styles.footerContent)}>
              <p>Double-click to edit a todo</p>
              <p>Ported from Elm by Alfred Delle</p>
              <p>Part of TodoMVC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 'auto',
    width: 'auto',
    backgroundColor: '#f5f5f5'
  },

  header: {
    textAlign: 'center',
    font: '4em Helvetica Neue Helvetica Arial',
    color: '#e6d1d2'
  },
  inputBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  inputContent: {
    width: '24em',
    height: '4em',
    paddingLeft: '4em',
    fontSize: '20px'
  },
  listFooter: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  footerContent: {
    textAlign: 'center',
    paddingTop: '4em',
    fontSize: '10px'
  },
})

export default App;
