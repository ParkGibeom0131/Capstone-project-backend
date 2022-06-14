from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from tkinter import filedialog
from tkinter import *
import keyboard
from PIL import ImageGrab
import pytesseract
from selenium.webdriver.common.by import By

# 크롭샷, 유저별로 최적화 필요함
pytesseract.pytesseract.tesseract_cmd = R'C:/Users/박태진/AppData/Local/Programs/Tesseract-OCR/tesseract'


def cropshot():
    img = ImageGrab.grab()
    croppedImage = img.crop((170, 55, 1700, 80))
    croppedImage.save("C:\\python\\crop.png")
    text = pytesseract.image_to_string(croppedImage, lang=None)
    URL = "https://file2.me" + text.rstrip()
    return URL

# 시간이 더 소요되는 드라이버 세팅, 기존 세팅은 지움


def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_experimental_option(
        "excludeSwitches", ["enable-logging"])
    driver = webdriver.Chrome(service=Service(
        ChromeDriverManager().install()), options=chrome_options)
    return driver


while True:
    # 이 부분은 데스크탑앱에서 온/오프 설정
    if keyboard.is_pressed("shift + q"):
        URL = cropshot()
        print(URL)

        driver = set_chrome_driver()

        root = Tk()
        root.filename = filedialog.askopenfilename(
            initialdir="E:/Images", title="열기", filetypes=(("all files", "*.*"), ("png files", "*.png")))
        print(root.filename)

        # 업로드할 파일 메타데이터 제거 처리 파트를 여기에 넣기 변조할 파일은 root.filename이며, send_keys에 수정한 파일 경로를 넣으면 ok

        driver.get(URL)
        driver.find_element(
            by=By.CSS_SELECTOR, value="input[type='file']").send_keys(root.filename)
        root.destroy()

    # 이 부분은 데스크탑앱에서 온/오프 설정
    if keyboard.read_key() == "esc":
        break
