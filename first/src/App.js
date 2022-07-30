import logo from './logo.svg';
import './App.css';
import './style.css';
import './product';
import Product from './product';
import Slide from './slider';

function App() {
  const imgs = ['https://media.bunjang.co.kr/product/183206594_1_1654042021_w292.jpg', 'https://media.bunjang.co.kr/product/192204136_1_1656841430_w292.jpg', 'https://media.bunjang.co.kr/product/192606348_1_1657000593_w292.jpg', 
  'https://media.bunjang.co.kr/product/192032730_1_1657001067_w292.jpg', 'https://media.bunjang.co.kr/product/192494933_1_1656902976_w292.jpg', 'https://media.bunjang.co.kr/product/192528735_1_1656923440_w292.jpg', 'https://media.bunjang.co.kr/product/192612989_1_1657004685_w292.jpg', 
  'https://media.bunjang.co.kr/product/192613001_1_1657004693_w292.jpg', 'https://media.bunjang.co.kr/product/192608325_1_1657001861_w292.jpg', 'https://media.bunjang.co.kr/product/192542170_1_1656931413_w292.jpg'];
  return (
    
    <div id="all">
      <div id="header">
        <div id="header_wrap">
          <div className='header_content'>
            <div className='tmp'>
              <a className='download a_content'>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0ibTg4aW90dDQ5YSIgZD0iTTE2IDExLjAxOGwtLjAwMS41N2MtLjAwMS4xNi0uMDAzLjMyLS4wMDcuNDgxLS4wMS4zNDktLjAzLjcwMS0uMDk0IDEuMDQ2LS4wNjMuMzUtLjE2Ny42NzYtLjMzMS45OTUtLjE2MS4zMTItLjM3MS41OTktLjYyMi44NDdzLS41NC40NTYtLjg1Ny42MTVjLS4zMjIuMTYyLS42NTEuMjY1LTEuMDA2LjMyOC0uMzQ5LjA2Mi0uNzA1LjA4Mi0xLjA1OC4wOTItLjY3OS4wMDgtLjg3MS4wMDgtMS4wNjQuMDA4SDUuMDRjLS43NC0uMDAyLS45MDItLjAwNC0xLjA2NC0uMDA4LS4zNTMtLjAxLS43MDktLjAzLTEuMDU4LS4wOTItLjM1NC0uMDYzLS42ODQtLjE2Ni0xLjAwNi0uMzI4LS4zMTYtLjE2LS42MDYtLjM2Ny0uODU3LS42MTUtLjI1LS4yNDgtLjQ2LS41MzUtLjYyMi0uODQ3LS4xNjQtLjMxOS0uMjY4LS42NDUtLjMzMS0uOTk1LS4wNjMtLjM0NS0uMDg0LS42OTctLjA5My0xLjA0Ni0uMDA1LS4xNi0uMDA3LS4zMi0uMDA4LS40OEwwIDExLjAxOFY0Ljk4MmwuMDAxLS41N2MuMDAxLS4xNi4wMDMtLjMyLjAwOC0uNDgxLjAxLS4zNDkuMDMtLjcwMS4wOTMtMS4wNDYuMDYzLS4zNS4xNjctLjY3Ni4zMzEtLjk5NS4xNjEtLjMxMy4zNzEtLjU5OS42MjItLjg0N3MuNTQtLjQ1Ni44NTctLjYxNUMyLjIzNC4yNjYgMi41NjQuMTYzIDIuOTE4LjFjLjM1LS4wNjIuNzA1LS4wODIgMS4wNTgtLjA5MkM0LjY1NiAwIDQuODQ4IDAgNS4wNCAwSDEwLjgwMiA4Ljc1aDIuMjFjLjc0LjAwMi45MDIuMDA0IDEuMDY0LjAwOC4zNTMuMDEuNzA5LjAzIDEuMDU4LjA5Mi4zNTUuMDYzLjY4NC4xNjYgMS4wMDYuMzI4LjMxNi4xNi42MDYuMzY3Ljg1Ny42MTUuMjUuMjQ4LjQ2MS41MzQuNjIyLjg0Ny4xNjQuMzE5LjI2OC42NDQuMzMxLjk5NS4wNjMuMzQ1LjA4NC42OTcuMDk0IDEuMDQ2LjAwNC4xNi4wMDYuMzIuMDA3LjQ4bC4wMDEuNTcxdjYuMDM2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPG1hc2sgaWQ9IjN4bmRjNnc0YWIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjbTg4aW90dDQ5YSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNEODBDMTgiIGQ9Ik0wIDBIMTZWMTZIMHoiIG1hc2s9InVybCgjM3huZGM2dzRhYikiLz4KICAgICAgICAgICAgPGcgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCMzeG5kYzZ3NGFiKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC45MSA0LjkyMUwzLjY0MyAxMC41NmMtLjAzNC4wMzYtLjA5NS4wMDgtLjA4OS0uMDQybC41ODgtNC43NzZIMS43MDRjLS4wNDUgMC0uMDY4LS4wNTQtLjAzOC0uMDg3TDYuOTMzLjAxN2MuMDM0LS4wMzcuMDk1LS4wMDkuMDg5LjA0MWwtLjU4OCA0Ljc3NmgyLjQzN2MuMDQ2IDAgLjA3LjA1NC4wMzkuMDg3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi43MTE4NjQsIDIuNzExODY0KSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                  width="16"
                  height="17"
                />
                &nbsp;앱다운로드</a
              >
              <button className='star btn_content'>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQ0NDIiBkPSJNLTE2LjUtMTYuNWg0OXY0OWgtNDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5QjQ1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwbDIuNSA0LjkzNCA1LjUuNzktNCAzLjg0OC45IDUuNDI4TDggMTIuNDM0IDMuMSAxNSA0IDkuNTcyIDAgNS43MjRsNS41LS43OXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  width="16"
                  height="15"
                />
                &nbsp;즐겨찾기
              </button>
            </div>
          </div>
          <div className='header_content'>
            <div className='tmp'>
              <button className='login btn_content'>로그인/회원가입</button>
              <a className='mystore a_content'>내상점</a>
            </div>
          </div>
        </div>
      </div>
      <div id="middle">
        <div id="middle_wrap">
          <div className='middle_content1'>
            <a className='logo'>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAxMzYgNDAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBmaWxsPSIjRDgwQzE4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjc1MSAxNC44TDUuOTY3IDMxLjc1NmMtLjEwMi4xMS0uMjg2LjAyNS0uMjY3LS4xMjVsMS43Ni0xNC4zNjNILjE1NmMtLjEzNiAwLS4yMDctLjE2Mi0uMTE0LS4yNjJMMTUuODI2LjA1Yy4xMDMtLjExLjI4Ni0uMDI1LjI2OC4xMjVsLTEuNzYgMTQuMzYzaDcuMzAzYy4xMzYgMCAuMjA3LjE2Mi4xMTQuMjYyTTc5LjQgMi41NTVWMjkuNjVoLTQuMDNWMTYuMTMyaC0yLjZ2MTMuMDA0SDY4LjhWMi43MDVoMy45NzF2OS4zMjRoMi42VjIuNTU1aDQuMDN6TTk0LjcgMTguNDU4Yy43NTcgMCAxLjQ5My4wMDUgMi4yMS4wMTUuNzE0LjAxMiAxLjM0NC4wMzYgMS44OS4wNzUgMi4yNTcuMTM4IDQuMDA3LjY1IDUuMjQ2IDEuNTMzIDEuMjQuODgyIDEuODYgMi4yMDcgMS44NiAzLjk3M3MtLjYyIDMuMDg2LTEuODYgMy45NmMtMS4yNC44NzItMi45OSAxLjM4OC01LjI0NyAxLjU0OC0uNTI1LjAzOS0xLjE0NS4wNjMtMS44Ni4wNzMtLjcxNy4wMS0xLjQ1OC4wMTQtMi4yMjMuMDE0LS43NjcgMC0xLjUwOC0uMDA1LTIuMjI0LS4wMTQtLjcxNS0uMDEtMS4zMzUtLjAzNC0xLjg2LS4wNzMtMi4yNTgtLjE2LTQuMDA3LS42NzYtNS4yNDgtMS41NDgtMS4yNC0uODc0LTEuODYtMi4xOTQtMS44Ni0zLjk2cy42Mi0zLjA4NCAxLjg2LTMuOTU4YzEuMjQxLS44NzIgMi45OS0xLjM4OCA1LjI0OC0xLjU0OC41MjUtLjAyIDEuMTQ1LS4wMzkgMS44Ni0uMDYuNzE2LS4wMiAxLjQ1Mi0uMDMgMi4yMDgtLjAzek0xMzMgMi41NTVWMjkuNjVoLTQuMTIzVjE2LjM0M2gtNC4xMjN2LTMuOTIxaDQuMTIzVjIuNTU1SDEzM3ptLTk4LjE1NSAxNy42N3Y1LjE4NWgxNi44NzN2My42NUgzMC41MTN2LTguODM1aDQuMzMyem0zMi4xODctMTcuMDhjLS4yNDQgMi43MjgtLjY1NiA1LjI2OC0xLjIzNyA3LjYxOS0uNTggMi4zNS0xLjI2NyA0LjU0NS0yLjA2MSA2LjU4LS43OTUgMi4wMzktMS42NyAzLjkyNS0yLjYyNyA1LjY2Ny0uOTU4IDEuNzQtMS45MzQgMy4zNjMtMi45MzIgNC44NzFsLTMuNTEyLTIuMTdjLjk1Ni0xLjM2MSAxLjg1My0yLjgwMyAyLjY4OC00LjMxOS44MzQtMS41MTggMS41ODMtMy4wNzkgMi4yNDQtNC42OS42NjEtMS42MDcgMS4yMzItMy4yMzUgMS43MS00Ljg4NS40NzktMS42NDguODQtMy4yNzggMS4wODUtNC44ODZoLTYuOTYzVjMuMTQ0em01Ny4xNjEgMHYzLjczNGgtOS4zNDh2NS44NDFoOC42OTN2My42MTVoLTguNjkzdjcuMDc0bDEyLjI2NS0uNDh2My41NTNsLTE2LjQ5Mi44MTFWMy4xNDRoMTMuNTc1ek05NC43MTUgMjEuOTdjLS42ODYgMC0xLjM1Ni4wMS0yLjAxMi4wMjktLjY1NS4wMjItMS4yMzUuMDUtMS43NC4wOS0xLjAyNy4wOTktMS43NjguMzE3LTIuMjIyLjY1Ni0uNDU0LjMzNi0uNjguNzczLS42OCAxLjMwOCAwIC41MzguMjI2Ljk3My42OCAxLjMxLjQ1NC4zMzcgMS4xOTUuNTU1IDIuMjIyLjY1NC41MDUuMDQxIDEuMDg1LjA3IDEuNzQuMDkuNjU2LjAyIDEuMzI2LjAyOSAyLjAxMi4wMjkuNjg1IDAgMS4zNTUtLjAxIDIuMDExLS4wMjkuNjU1LS4wMiAxLjIzNC0uMDQ5IDEuNzM5LS4wOSAxLjAyOS0uMSAxLjc3LS4zMTcgMi4yMjQtLjY1NC40NTMtLjMzNy42OC0uNzcyLjY4LTEuMzEgMC0uNTM1LS4yMjctLjk3Mi0uNjgtMS4zMDgtLjQ1NC0uMzQtMS4xOTUtLjU1Ny0yLjIyNC0uNjU3LS41MDUtLjAzOC0xLjA4NC0uMDY3LTEuNzM5LS4wOS0uNjU2LS4wMTktMS4zMjYtLjAyOC0yLjAxMS0uMDI4ek01MS43MTggMi41NTV2MTkuNDM3aC00LjI1OXYtOS41OThoLTMuOTU4djUuODEzSDI4Ljc0NlYyLjg1Nmg0LjI1OXY0LjE1aDYuMjM4di00LjE1SDQzLjV2NS42MDNoMy45NThWMi41NTVoNC4yNTl6bTQ2LjYzNC41OXYzLjcyaC00Ljk0NGMtLjM2Ni42ODMtLjc3MyAxLjM4My0xLjIzMSAyLjEwNS0uMDc0LjExOC0uMTYuMjM0LS4yMzUuMzVsNy40ODUgNC44OTgtMi4zNTggMy4yNjItNy4yMzItNS4yMDVjLS4wMzcuMDQ4LS4wNy4wOTYtLjEwNy4xNDMtLjg5NSAxLjEzNy0xLjg0IDIuMjMyLTIuODM0IDMuMjgtLjk5NSAxLjA0Ny0xLjk4IDEuOTY2LTIuOTUzIDIuNzZsLTIuNzc1LTIuODA3Yy43NzYtLjYxMSAxLjU1MS0xLjMwNiAyLjMyNy0yLjA5Ljc3Ni0uNzgyIDEuNTI2LTEuNjA3IDIuMjUyLTIuNDcuNzI2LS44NjQgMS40MDItMS43NTggMi4wMy0yLjY4NC4zNDgtLjUxNi42NjUtMS4wMy45Ni0xLjU0Mkg4Mi42di0zLjcyaDE1Ljc1MnptNi40MTgtLjU5VjguMWgyLjkwM3YzLjk2aC0yLjkwM3Y2LjRoLTQuMTY1VjIuNTU0aDQuMTY1em0tNjUuNTI3IDguMDIzaC02LjIzOHYzLjk5N2g2LjIzOHYtMy45OTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                width="136"
                height="40"
              />
            </a>
            <div className='search'>
              <div className='search_content'>
                <input
                  className='search_input'
                  type="text"
                  placeholder="상품명, 지역명, @상점명 입력"
                />
                <a className='search_img'>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeZJREFUOBGVVD1PAkEQ3VlOjY0xIdGOI0BMxMSGytJE+RsWWomx8mfYWNBpZWltg1b2NCZaGBppFAzR1njsOO9gzHEfIJdws/vmvcft7OySiT2DQqUakDtipjoZ4xsyzGy6RNzy2F7mu53nmGRiKprRw7XaQm/wdU6OG2xMTvFoFPKQLTXX86tn1G7/RHM6thjArP/xeWscn8rUWqJLee/klhdW8MM4xCQHDrjQqEkivhfLF++FEvf80luvsLGXIIwB5MABF5o0HoU1M+5RkvK1Xn29+3KfRlQMpmyCOyzfM3Y7XlMbboDUjIiuZpnBFBwsH3WGVv9Io8VuYuLEUMFZUbmqjfJt2BqC5JZyT9HEtLFyVRvlhrscBeYaS4/G+VaQV4DD7+FWPJk1Vy4aPs6R+nILoBTzMJ7MmitXtVGexXFCC8j5OpzWgyoCxzEfQQOt4hot+gjHSZZOhoLraabIEQU3EEMT70HgHl44m3KcNqUm+2SCVt8vX6E1dDdRMyzTcSCXBhRSImc6o9HkW7589Pz3cpAD8CBL3oXKkj1Ze+00xxZh+DNUMHF9SQKdEL2+en7lmNmFRmmm6jVXhGl4SchF0fcrjbnEWeQ008SSs8RZuC5fjIbWW6xm8ebCYdovlg8g+gXwsu0wmCVGbgAAAABJRU5ErkJggg=="
                    width="16"
                    height="16"
                  />
                </a>
              </div>
            </div>
            <div className='menu'>
              <button className='menu_content'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAAA59JREFUaAXtmU1S2zAUxyWnDaawSJfAJj1BzddMl2TXpblBQg9QOAFwAth2QZ0bQJddkWVn+GiOQDfADnemfIROrP6fx8o4Tkw86AnSTjWTSHqSpZ/+fnpyHCmS5HletVQqbaLq41PR9jHKm91ud7vdbp8Rk6SvhYWFupRyB8VxBCZEnUKl1Mbp6WlTJkp/R8u4Q/fgofx8aW5ujpR+p61/Qe46jlORi4uLKgNLvrQBXwoz9meppvZePQ0wAA7o1+MCrUEBX0HguNJ1yp10hcrjBp3HNACeXci41v+DF7kzt4FbpU+RvqP6PJniv4KXHg6P/cnG3dkoqCLtL4p0Mu1zu+fWAR3gdK6ZjqWvt6749Z67paQKMGELarf0xKa5NcWvAlEpi/KOVKpOkFC7YQqbvt4KOEFPqIlDTOTFk0mxy+XbGp4dnDahoxyC1g9tYUd0tvWEXDkr+HVQ9qWS5M8aWgglWq50vVuyJqkruuF043db1x+Ts4Hf7E2sA5KeNPuTFD4iip8ynuFXwGqq/qgiCziUDgBdL0DQ6sjO6uuGCAv0fbCLMThOwpUoEj+UELEfS6HeQtG0wjEAQmJzqnHPFlmMwZPY3NLy3HyOo4muxjn8vvFqrdPsMxpWjMHT89PmhMuspGxhJKPa9JrZRkyN1yuynZwUu6FsenO24c9vTKNHjzRTYAMvR+46xq7S+OTPgK5xbEIab1hicRV6VEXI+xhPoMTG1Nr97rDJOG0s4JGINiVCCZReBfQBJ2DeWMbgFA6hthdvQsPTMA9ymN0YXESi2nHs+rMV8MkPd81hA9u2sUUV26DZ8f8dcHprlF3dc9eHMQ0ojlddO8M6Phd88votfSLHKPTucB8lnwGseXJyMvLpb2lpicIn/UIySQd4Y+vEj6MmoyTX1kmEp7hbxOwcHR21ocBIpQouzIerHdqEJ1Zijn2c/prAKuYBx3Fce5bgyT3miZVElPRlkpaXl70oishns9EoxEQ1Usdk/LxrB6JKXsc8e3zbAIj2LGCFFkQLy7vWxG6suJ48CVukfBa090+Z7suRs4ETzAPwgjaV9k8O8BLHIHqMy8vLu4uLi0+zs7NV2PqUx7tDf2Zm5ifav+n+JjkruAYB3Jcc+Pf4e7Jyfn7+Vfd9bG68OfMmplMUKm9n2+EyfXci2160bg2cAI6Pj7cYD7e+NVkFp5loQ9qAtw6u4eE2FOtDqnOkJwEnULhNi05SFFng/wBaR0Y/O/3CZQAAAABJRU5ErkJggg=="
                  width="23"
                  height="24"
                />
                &nbsp;번개톡
              </button>
              <a className='menu_content'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAABCNJREFUaAXtWUtS20AQtWxXJSEbZ8XWuYH4rcEnwNzALg6Q5AQJy6yAE1icIOYEmDWf6AbRispSqwSqAOU91QwetUbWSAFjqpgq10z39OdNT89P9hqPVNbW1vowtY2fr36m5RAEf8cXFxdjs6Nu26urqPVWV1cHnud9Bd3VvJI6SpJk7/LyMiiRm9ldG/jGxoZ/f38/gnVGuE4Jm83m8OzsjDNRudQCrkCfwFunssesQgzwvTrgKwMvAR0jbQKkwinqmBjR7qC9iXoA0jbQWuArAfd9v9NqtX5ZAMQAxrw9QF9hwXr4jEFwPcgBxHd3dx/DMEwHW2jA6Gga7dImQO9DSDplrvbKQNM4ZSiLZkjaKAwIbTsX54gj2l0VbdN45UhRuWjmVNQj00FR2zniAM0pzhRM+06V6dXK1KGupnVt86H7ZO0MHIp9oRycn59PBM+ZVLqBUJA+RPeUdAK+vr6+BRWZ28dTM7Vb0kZH+So16AQcB40vLT3G0W2zYfMlfZN2Ao6dQEZ7YjNWk5exZfFlNdu2cisw/4ze7DeSise+1wiXhjdfKrjJif43cAV6K2d5FiOZ1enW55QqyLtYmJvmfNKQC0yIWsisztQWRC2+LAbcczwU2h3eWcjzmt4YVSz6Z5Gx0mkoGx1TGDkemnRR2ynitv0akflEo++G1xHSZa/IQY4P2VQHHdqGKWPzZfbrthNwJRxoJVUPdNSXdm8OksQrBU8ZylJf6Q6ULV0FulFWOwPHEX0kjSFiI947yH+/e/0NMj1EfyzlyGMfZdhHHepKOZsPKaNp50sWFfCu/IGqr5VVHeJy1JN3lr+jt93rxnX8YZjNf3XBOoGuL+yMcSDtCF4hWQk4nPKG+BPW0igbVmO0h7aT0JDhwDloRjqnj8GvYPCRKT+rXQk4DfEugUcDI2YrfAgfcme4vb2NKNBut7tICx9pwMXcJU8WppHrotS6lYFTUb3sczmqjVapMdBhnRd/LeAExl0BkWTOd0nXKBFmZqfOQ5m+WjUcpipXV1e/l5eXj5DzN2D4+L11tMVHxHfkNCMdOerkxGpH3LTEnQLR44ehTfC38MstPvAmSItTzFIgdyD0LU7hInZ9FCwO6lckxRGYmePMXezDXHhzLzgHsBSKPxBZgat9mgfGs4A2ohTyQLPt8xngam/mwfLcgA3saZNfyzJfdh+AK9A8yuVWJo08Fx0D/MOX3RR4CegYSMM5o+WM2wL4AD59LKu7sRTkhYlfYIM5g07dFfzToe/xK17Bhcl6x573AIru7ryYNXFMbwtA/AKbexgImbmQ3A6JBc5i0yEx8+nWF8zDWfunKTuPNrEA6KHw1be9OSdCaBHIHCYb8EUAmsGgX1Mm80UAR7pEJmi2XwRwCfoVuC0iT817TZWnjrC0/2Ij/g8RGqgJ9UrG3gAAAABJRU5ErkJggg=="
                  width="23"
                  height="24"
                />
                &nbsp;내상점
              </a>
              <a className='menu_content'>
                <img
                  src="data:image/png;base64,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"
                  width="23"
                  height="26"
                />
                &nbsp;판매하기
              </a>
            </div>
          </div>
          <div className='middle_content2'>
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAExJREFUWAnt1sEJACAMA0DrJt1/SAVXyKfI9V8Il0+qu88afHtwthdNwOkNyUeAAAECvwuUNRNWbM2EgN4JECBAgEAoYM2EgMuaSQUv1d0EPE4sEMMAAAAASUVORK5CYII="
                width="20"
                height="16"
              />
            </div>
            <a>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;번개장터 판매자센터&nbsp;</b>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAYAAABvqT8MAAAAAXNSR0IArs4c6QAAAfZJREFUKBVtkstq21AQhi3pqCpWUllWkippCjY2WcWbLPoahS76Bl2XkscIhe7zAllkVbrMY8S0pGCwsWIS2U6ELFRfJPUbg4ubeGA0M2f+fy7nSKvX679KpVKEXmqaFsRx/D0MwwnxRtE5DYuieARcxndM06zWarUKvuSeieG6bh/wTzIf0BMIb3VdP/I874bu88FgkK+zlGEYAYA/s9lMxpCqVTpmFPEnk4lJHKIZuiRqOC9Qs9Fo7C8Wi10KfCKuQFpAGmG/lcvlsN1uPwpJ8Zmhc6XUXZZlAhoS63me70onChxMp1ODs6ngpMNKZBzd930XcoVd3hPvUeAEYsLZV+xImCspcHLmTknObds+JDYBvYNk072Nr9Y7rIhitWazuc1FHEI+B+hzNkazjXctBHQpgGmgSXeRQpZ+KobjOK8AfmThN9iXAIZcwhnE0TpBuhk8lryDy8yvAbjokDjmEm4hDVet9Var5SRJskPyM7rDY1rYCOI5e9x3Op2AgnPFclYURWaapvtU2OOwim4DHlNdFh1AlrdJ0UKROGZmj0pfSGxxeI3+Jr4gHvd6veXtCBgtKaoeYGVWGyv3PsKXV7/rdrvy28t/9E9k6VNACdV+4N/zG1xZlhX3+/2Y+L8/VVhC8Kgoo8WQHvgBH4IgSCS5Sf4Cbfj85T5s+hEAAAAASUVORK5CYII="
                width="6"
                height="9"
              />
            </a>
          </div>
          <div className='middle_content3'>
            <div className='banner'>
              <div className='banner_first'>
                <div className='first'>찜한상품</div>
                <div className='first_1'>
                  <a className='first_2'>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAX1JREFUOBGdk7FLw0AUxnPXFhdHRdBdVJBCGgedBP8GoYJQHMRBRNBF1EGnTkopXcRBBEFB/A+cnNuIhEBHQcFBnHRolsTfqwZiWmLSg8t733vf++7d5U4Zv8NxnDHP846Ai8xxpdRDEAT7lmU5YKPZbE5hlonPYfPknrB18m9YQ8nHtu0l3/dvcEcER8ZnLpcrUzTLPGYORXLifmity6Zp3ivXdYc7nU4b0kSMlArS4Tu1MxqR7UFFZCVqRxE71DjzqZZOJi1o1CaTOamy0xraSypqAoldPcvWHhM4aVO2LhQKNbb3lbYizqPWI1bVxWLxla4O4oQMeI9L2ZYzMnDqXKxqhuIuVWpKpVJNQPdmhwI8gxP8nRD/Y09pYDfk/BGSYKvVarDVzZDQz3IuDTrZiuZ6hBBRvL0z7HqUGPqInPO2NrBBGBPbIyRBEaOzC9yK4Mi4pJO1uIjk+wpJAjGN2BXuimDGNSKriPg/MMMXsTw/4BbBO/EzlA5O/QbfD5IxtG4t8AAAAABJRU5ErkJggg==' width='9' height='9' alt="찜 아이콘" />
                    &nbsp;&nbsp;0
                  </a>
                </div>
              </div>
              <div className='banner_second'>
                <div className='second'>최근본상품</div>
                <div className='second_1'>
                  <div className='second_1_1'></div>
                </div>
                <div className='second_2'>
                  <img src='data:image/png;base64,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' width='28' height='16' />
                  <div>
                    최근 본 상품이
                    <br></br>
                    없습니다.
                  </div>
                </div>
              </div>
              <div className='banner_third'>
                <div className='third'>앱 다운로드</div>
                <div className='third_1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAXNSR0IArs4c6QAACplJREFUeF7t3d1ynEoMBGD8/g/tU7kLkOJLl2Z2vTntW83op9WSBgzs13Ec38cL/76/n819fX1F3qT6puuv/qX6rsGl+7X+qj/FMwL/D4t/Za+E+g0YEUbyNKEiSGovtT8l0M1eCXWGRAmUPE1oCTWkdAqgzKX6putLqOeM3EaeAFeCVaFX/UqQzgDS9+ozSxq/1sv/FL/d+S2hLhlTglYXVAkVIqoEpfK0YrVeCZ1WtOKTffkv/ZKH6bwtv+pvh2qHGnEqJpTOMLsrSPbTDqKKTeVp/On66RlxGk/qLzuUEpoaFECSy57KLQV46o/wk37JhUcar/CTPyXU5c79NAECfDcBZF/yEgr/ytGhVwBLnhIkXb/afqov9ffjOlR6ZlLFTUeSAN9NaOEx7biK7+MP5QJQBFKCUwC1XvbUMVL51J7wkz/tUHi6QQCWUOenQ0qoEkpN6SRXgf14QqmF7+4Qq/UrnnSkp2ckEULs0v4SCrcNSqgzAiXUhRFpRZdQJdRj1y6hzg/o6raJCiq+baCZKnmaQLXU6RlD/qYAyt9Un/yTvVQue5KXUELoIk8TpIqXPrmn/alc9iQvoYRQCRUhVEJFcB1HWvHtUG9+jWr3Gav6s/ccw3q7LX/7e3lN+Dnh046o/VPCaH8JdfnXixLy6XIRYiovoUqoKYdO+7++0xs7S83flelQu9q8wp/6M9Wvjqj7XKvxkr4SavHHO9IEi7AllCgMuQAeqr9tn3YQ+TPVX0IJ4RLqfOZ48fNYw/RwO0eeLuuvFt7dYWRfFT/tKLtHnjKqfAkf6Vd8JRSu8qYFMyWo9ss/FVBKoBLqgoAAVgLTCp/q0/4SaloSIUFYUe1Qo4zcClRfsFNFK2HydnXFpxWr9fJfcnUYxa/9sj+NT/b5tIEIshoA6ZM/AlSH1Cngsp8mZBqv/FmNdwm1+UZmSgglWIQUgaYFI/slVAkVcXA7oXYzXvp1ppvKI7T/sFj20w42xUPxpIRRfHzaIDU4DWAKoAKWXP5LnuoXvlM8Un+n9kqo8Jcb0gStPiPpIkP20g6Z2iuhSqjHGokJ9ernoeSgOkAqlz1VtEbSu/VP8dB+jfCbvIR6foi/hHp+07iEevHHMXZ3QHUYHbK1vx3qgtC7R9L/nlBpAtKRoKuMaQJUkVN/pxWt+KU/xSddL/uS356HKqFmL0ZqRJRQ4Xe81SEE6OqKUoGk/qpCS6gLAkqA5GmCXp2AjrxzhoSHCuiWb902UMeQwSlhUvsCSPrS/VqvAhM+U3man6m/8TPlcnD1SBMBZE8ATfeXUJfPSrdDZSMgHfki9LQDab8agApC8d6ehyqhSqgn0o0JJQVi/LQipX93RU79n1a84p/mJz1C6EjADjV1eJoQAVpCPX9PSviVUBeESqgS6kSJ1YRIK04jadphpX86AVbvV0eLR57ey5NBEWQqT+1rvRIigoowqX0lTPokV7xpAWk9n9iUw1PCaH9qX+sFcAmVjdTbobwdKvupinaoc8mWUOE3NVePpN0dUCNJBaEOLv3jf72sdlAOa0RO5RqZilf704RN9b2cwNM75QJ4CqD2r5YrgYpX++Wv9k8LbnXHvflTQmUP1JVQz5TvyAvfyyuhQKjrVd70DJICns74dGRIv0aM4pE/U7lGnEaY4l8dX/ybwynhlLA0YCUoTYD8Ww34FL8pXiKg8JP/JRQYVUJlP25UQpVQjwhoIsSPr+weCdKfyqcjQS19tVzxKZ50hKX20g7N9/LkQGpQ62VPciVgNSHSCk7jVzwlFD5JKMJIrgSUULjsH35mux0q/N/eakJOC+THdaj0PtQ0AHWQVP+rR85PG1lp/CJwGt/tNkMJtXYE6D7O6oSWUIv/1ZECmlag9IsgqzuyCKuRLH9TfNqhwouCEkoUPMvjfw6rAiTXGUkVPdWvCs/gO46pPyJsKpf/6kBTeyVUOIJ3F4QIKnkJNfzmZdrR2qHOz9ALj5TA7VDtUCdObR95aqGrGZ7am54JZE8dUPvln/bLftpB0pEt/Te5HgFWwCXUM0IlVMqgy/ppy0zNK2HyR/bUIbRf/mm/7KuDSL/2x/J2qGfIldA0YVqvjp+OLNmLCaP/fV4JNQUwDUDr0w6T+p92EPmzWi58VstFMNkbP20gA6oo7VeC0ore7Y/8TeXCZ7W8hMIZToC3Q50RKqFKKNVMJB8TSo+vRN4cx6GWno4oBSh56r9G4jQ++Sv51L/U/xQ/vvUSKxw+QroasNT/qX0VjAgj+dS/Eir8rZn0Kk+EU4J1BlMCU3kJheePRIA0odInAk0T1g51HKd/P08rToCmCZuuF4Gm8aYdJrW3O/4UHxVsfIYSgCVU9hu9u/ESYSTXhLj5n17llVAZYd6NlwgjeQklhC7ydAQJ4FT+z3Uo/XNYFSa5AFMCxI8pIaRfZ4b0jCN/V+O12p782/7EphwooZ4prYIV4Uuo8JFcAaaEtEOdEUjxuq5vhwKj1AE68i6/6Dn9JYUUUHUEdZx0hGp96o8qeCqXv9MjQhqv1t86VAn1DJkSuFpeQuEyfDoy0gpRh5v6M+1A2l9ClVAnBEQYyT+eULoPlXaI9EylkZHqk7+pPdkXAdL98j/tsNKX4qH1vMqTQwpQDkiuhMj+7v0l1OUqrx1q7W+9iOA6400LWPunBaYG0A61+UaqEpgSQIRN9Ykg8j++bSCDqrj0ECpAdutLAUzxebX/wjOVM9+6D5UCpjOFHFKAr05IGr/8k1zxC990f7pe+eOPWKeAKmA5pABfnZA0fvknueIXvun+dL3yV0LhDFVCnSlHQk2v8lKGq8LksOzp0DoliOxLrvhW+y9/UnvK3/gqTw5L/uoRUEKdM1JCgaEpQCK09KlgdNWoitd++S//FF/aUduh9L2j8D6VEpgm6OMIpdsGAiiVrx45SlDqnzrGav+nhFGHSuXCS/HzKk8GUrkcklwJSP3R+jQhqf+KZ7X93f6VUOGZTAmRXATW/t3yqX8lVAklDp3kInT8Knpk/S++F6WrjNSezlTpCNFISs9c6foUH8Uv+4qX+KWvoqcJpgNvvopSxQlgJUgJXo2P7MlfxUt/S6jnbxUIYCVICWaCwoKTPfmreOlvCVVCPU0ddfCbXISaznAxWhWTVpxGchpPWrGyL7kSqP1TeYr3FU8eytMECBA5nBIwBTCNp4R6RriECs8kJVQJ9YhAO9QzQTRBdET58SMvHWkCJCWURnjawab6lNDV8afxlVBg7JQAOhOK4ClB0vXTgv24M9Q0YFW09JdQZ4SERztUO5Rq6iT/8YRKR4Ja+rQjRej+uom3+Vfd0zOM8NGITe3d8H73jc0SavYqvPCbFlhaMG8feQJEcnWUtCKlb1rBaYJSe+1Q4TPdAmxakSVUdgiPR14KsBIqQqzuSLKXxrfaP3Ug+acOvLoj0h+doaRA8jQB6fopgeX/av0pAeRfqk/rxwQvoZSys3w14ccJHL5Kr+jTDs9DuQxKniYgXb+6g6yOR/7984QSoFO5GJ+2ZCVE+uSP4n13Aci+5CK88OG/XgTgVJ46mNpLD6HyR/bThE0TmO5P/Zuuf/trVAJICW2HOt8YVUGpgEqoC6MEqAiYEjhNgApICU/3p/5N1/8HXsNEfO+MGqQAAAAASUVORK5CYII=' className='third_2'/>
                </div>
              </div>
              <div className='banner_four'>
                <button className='four'>TOP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="body">
        <div className='body_first'>
          {/* <img className='body_content1'
            src="https://media.bunjang.co.kr/images/nocrop/844398082_w2058.jpg"
          
          /> */}
          {/* <button className="slide-arrow prev-arrow"></button> */}
          <Slide>
          </Slide>
          {/* <button className="slide-arrow next-arrow"></button> */}
          
        </div>
        <div className='body_second'>
          <img className='body_content2'
            src="https://m.bunjang.co.kr/pc-static/media/appdownload-banner.75b0fd5a.png"
          />
        </div>

        <section id="section">
          <h2>오늘의 상품 추천</h2>
          {/* <Product imgs={imgs}></Product> */}
          <div className='list'>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            <Product img={imgs[0]}></Product>
            <Product img={imgs[1]}></Product>
            <Product img={imgs[2]}></Product>
            <Product img={imgs[3]}></Product>
            <Product img={imgs[4]}></Product>
            <Product img={imgs[5]}></Product>
            <Product img={imgs[6]}></Product>
            <Product img={imgs[7]}></Product>
            <Product img={imgs[8]}></Product>
            <Product img={imgs[9]}></Product>
            {/* <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/183206594_1_1654042021_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192204136_1_1656841430_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192606348_1_1657000593_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192032730_1_1657001067_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192494933_1_1656902976_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192528735_1_1656923440_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192612989_1_1657004685_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192613001_1_1657004693_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192608325_1_1657001861_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192542170_1_1656931413_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/189965341_1_1656995881_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192387924_1_1656924690_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/182637789_1_1654859146_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192607503_1_1657001347_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192483224_1_1656900852_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/188640971_1_1656643222_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/189246507_1_1655404040_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192612852_1_1657004588_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192180161_1_1656896633_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192182689_1_1656920620_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/184754220_1_1653658361_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/191430061_1_1657006824_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192557079_1_1656940449_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/192491307_1_1656896355_w292.jpg"
              />
            </div>
            <div class="product">
              <img
                src="https://media.bunjang.co.kr/product/183206594_1_1654042021_w292.jpg"
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>  
  );
}

export default App;
