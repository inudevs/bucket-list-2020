import React from 'react';
import './styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      <a
        className="footer-item"
        href="https://github.com/inudevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        className="footer-item"
        href="http://facebook.com/inudevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook"></i>
      </a>
      <a
        className="footer-item"
        href="http://messenger.com/t/inudevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook-messenger"></i>
      </a>
    </ul>
    <span className="footer-desc">
      INU와 함께 새로운 도전을 해 나갈 팀원을 찾습니다.
    </span>
    <a
      className="footer-add"
      href="https://forms.gle/ko8fkx1gXGfFuXh77"
      target="_blank"
      rel="noopener noreferrer"
    >
      버켓리스트 추가하기
    </a>
  </footer>
)

export default Footer;
