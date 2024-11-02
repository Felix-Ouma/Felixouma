import React from 'react';
import styles from './Tools.module.css';

const tools = [
  { name: 'Windows', icon: 'https://i.pinimg.com/564x/96/f1/c5/96f1c5981e2dd285b8227eb475f19f1d.jpg' },
  { name: 'Figma', icon: 'https://i.pinimg.com/236x/e5/6e/6d/e56e6d8e55bde22f45e80aad8a90a5e4.jpg' },
  { name: 'React js', icon: 'https://i.pinimg.com/564x/25/e6/38/25e63889dbfb6aef7aea8352ef60dbae.jpg' },
  { name: 'ChatGPT', icon: 'https://i.pinimg.com/236x/cd/06/3b/cd063b24ea3e1f8d65d870cb810ab8a0.jpg' },
  { name: 'Slack', icon: 'https://i.pinimg.com/236x/87/06/6f/87066fe084e6754ceb348e6fa07f1e7f.jpg' },
  { name: 'Pen & Paper', icon: 'https://i.pinimg.com/236x/2c/9f/dc/2c9fdc0d31c5dd96d9df3e310cfdf412.jpg' },
  { name: 'Linear', icon: 'https://logowik.com/content/uploads/images/linear-app8372.logowik.com.webp' },
  { name: 'HTML5', icon: 'https://i.pinimg.com/236x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg' },
  { name: 'CSS3', icon: 'https://i.pinimg.com/236x/ac/26/26/ac262626eb1e924c85b8b68fe97c2213.jpg' },
  { name: 'JavaScript', icon: 'https://i.pinimg.com/236x/21/54/62/2154620d5f381cc5f7cd9fb458b3a718.jpg' },
  { name: 'Next Js', icon: 'https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg' },
  { name: 'TypeScript', icon: 'https://i.pinimg.com/236x/46/8a/22/468a2248751e4184583b9246adacc706.jpg' },
  { name: 'Adobe Photoshop', icon: 'https://i.pinimg.com/236x/c6/cb/46/c6cb46e898757fd90857826455e3785f.jpg' },
  { name: 'Adobe Illustrator', icon: 'https://i.pinimg.com/236x/4b/4c/d5/4b4cd529ea4bb3f11e2a690150f1e79e.jpg' },
  { name: 'CapCut', icon: 'https://i.pinimg.com/236x/c4/10/c7/c410c7c8c7bb31013500d214a7da8a8b.jpg' },
  { name: 'Github', icon: 'https://i.pinimg.com/236x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg' },
  { name: 'Dart', icon: 'https://i.pinimg.com/236x/71/cd/98/71cd98287eb155835256585a211fb712.jpg' },
  { name: 'Flutter', icon: 'https://i.pinimg.com/564x/56/0c/43/560c4353b21b4948e5f0e9508ea07597.jpg' },
  { name: 'Python', icon: 'https://i.pinimg.com/236x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg' },
  { name: 'MyQL', icon: 'https://i.pinimg.com/564x/f9/4c/51/f94c51912d572a43d16814c6e5a19548.jpg' },
];

const Tools = () => {
  return (
    <div className={styles.grid}>
      {tools.map((tool, index) => (
        <div key={index} className={styles.card}>
          <img src={tool.icon} alt={tool.name} className={styles.icon} />
          <p className={styles.name}>{tool.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tools;
