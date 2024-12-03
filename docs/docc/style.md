<meta name="referrer" content="no-referrer">

## 框架前端样式

[[TOC]]

----

### 样式预览：

- 主页

![image-20241203205747450](https://gitee.com/bx33661/image/raw/master/path/image-20241203205747450.png)

![image-20241203205830962](https://gitee.com/bx33661/image/raw/master/path/image-20241203205830962.png)

- 工具页

![image-20241203211524999](https://gitee.com/bx33661/image/raw/master/path/image-20241203211524999.png)

![image-20241203211546785](https://gitee.com/bx33661/image/raw/master/path/image-20241203211546785.png)

### 具体细节配置

引入https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js

#### 卡面：

主要是采用Bootstrap风格，和栏设计

> Bootstrap的网格系统基于12列布局，每个 `col-` 类表示一个列的宽度，数值（如6）表示该列占据12列总宽度的比例。

##### 工具栏风格

```html
            <div class="col-md-4 col-12">
                <div class="card shadow-sm d-flex flex-column" style="min-height: 250px;">
                    <div class="card-body text-center flex-grow-1">
                        <h5 class="card-title"><i class="fas fa-file-pdf text-danger"></i>PDF操作</h5>
                        <p class="card-text">快速处理您的PDF文件，例如合并、拆分或压缩。</p>
                        <a href="{{ url_for('pdf_routes.pdf_index') }}" class="btn btn-primary">前往操作</a>
                    </div>
                </div>
            </div>
```

--->

只需要配置`url_for`和`fas`图标

> `url_for` 是 Flask 框架中的一个函数，用于生成 URL。它通过端点名称（endpoint）和可选的参数来构建 URL

```html
<a href="{{ url_for('pdf_routes.pdf_index') }}" class="btn btn-primary">前往操作</a>
```



##### 重要卡面设计风格：

这个主要采用定向外链，添加时只需要配置`fas`图标

```html
        <div class="col-md-6">
            <div class="card shadow-sm special-card" style="min-width: 200px;">
                <div class="card-body text-center">
                    <h5 class="card-title"><i class="fas fa-book text-info"></i>文档说明</h5>
                    <p class="card-text">了解B-Panda的使用文档和常见问题解答。</p>
                    <a href="http://doc.bx33661.com/" class="btn btn-primary">查看文档</a>
                </div>
            </div>
        </div>
```

#### 工具页面

*主要背景采用渐变式样式*

可以按需求修改背景渐变：
```css
background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
```

linear-gradient 函数用于创建一个线性渐变背景。
45deg 表示渐变的角度，45 度是从左上角到右下角的渐变。
#ff9a9e, #fad0c4, #fbc2eb, #a18cd1 是渐变的颜色，从一个颜色渐变到另一个颜色，然后再渐变到下一个颜色，以此类推。



### 完整代码

index.html:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>B-Panda|自动化工具箱</title>
    <!-- 引入 Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入 Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        /* 自定义样式 */
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .custom-description {
            font-size: 1.2rem;
            color: #6c757d;
            text-align: center;
            margin-bottom: 2rem;
        }

        .card {
            border: none;
            border-radius: 0.75rem;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .card-title i {
            margin-right: 0.75rem;
        }

        .special-card {
            background: linear-gradient(135deg, #f0f9ff, #cbebff);
            border: 1px solid #0d6efd;
            box-shadow: 0 12px 24px rgba(13, 110, 253, 0.2);
        }

        .special-card:hover {
            transform: scale(1.05);
            box-shadow: 0 16px 32px rgba(13, 110, 253, 0.4);
        }

        .hero-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 3rem;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: 1rem;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .hero-title {
            font-size: 3rem;
            font-weight: bold;
            color: #0d6efd;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #6c757d;
            margin-top: 1rem;
        }

        .hero-image {
            max-width: 40%;
        }

        .about-section, .projects-section {
            background: linear-gradient(135deg, #ffffff, #f1f1f1);
            padding: 3rem;
            border-radius: 1rem;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .about-section h2, .projects-section h2 {
            font-weight: bold;
            color: #0d6efd;
        }

        .about-section p, .projects-section p {
            font-size: 1.2rem;
            color: #6c757d;
            text-align: center;
        }

        .navbar-nav .nav-link {
            transition: color 0.3s ease-in-out;
        }

        .navbar-nav .nav-link:hover {
            color: #0d6efd;
        }

        .navbar-nav .nav-link.active {
            color: #004085 !important;
            font-weight: bold;
        }

        .btn-primary {
            background: linear-gradient(135deg, #0d6efd, #004085);
            padding: 0.75rem 1.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .btn-primary:hover {
            background: linear-gradient(135deg, #004085, #0d6efd);
            box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
        }

        .btn-primary:active {
            transform: scale(0.98);
        }

        @media (max-width: 768px) {
            .hero-section {
                flex-direction: column;
            }
            .hero-text {
                max-width: 100%;
            }
            .hero-image {
                max-width: 100%;
                margin-top: 2rem;
            }
        }
    </style>
</head>
<body class="bg-light">
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand text-primary fs-4 fw-bold" href="#">B-Panda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2" href="#" style="transition: color 0.3s ease-in-out;" onmouseover="this.style.color='#0d6efd'" onmouseout="this.style.color='#6c757d'">首页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2" href="#about" style="transition: color 0.3s ease-in-out;" onmouseover="this.style.color='#0d6efd'" onmouseout="this.style.color='#6c757d'">关于作者</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2" href="#projects" style="transition: color 0.3s ease-in-out;" onmouseover="this.style.color='#0d6efd'" onmouseout="this.style.color='#6c757d'">项目介绍</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 展示区 -->
    <div class="container mt-5">
        <div class="hero-section">
            <div class="hero-text">
                <h1 class="hero-title">B-Panda</h1>
                <p class="hero-subtitle">一个基于Python开发的自动化工具集。<br>BX——一起见证星辰大海</p>
                <a href="#" class="btn btn-primary mt-3">快速入手</a>
            </div>
            <div class="hero-image">
                <img src="https://www.bx33661.com/upload/thumbnails/2024/w1600/logo-removebg-preview.png" alt="B-Panda Mascot" class="img-fluid">
            </div>
        </div>
    </div>

    <!-- 卡片布局 -->
    <div class="container mt-5">
        <!-- 说明区域 -->
        <p class="custom-description">
            在这里，您可以快速处理 PDF、管理邮件，并高效查找文件。选择下面的功能模块，立即开始吧！
        </p>
        <div class="row g-4">
            <!-- PDF操作卡片 -->
            <div class="col-md-4 col-12">
                <div class="card shadow-sm d-flex flex-column" style="min-height: 250px;">
                    <div class="card-body text-center flex-grow-1">
                        <h5 class="card-title"><i class="fas fa-file-pdf text-danger"></i>PDF操作</h5>
                        <p class="card-text">快速处理您的PDF文件，例如合并、拆分或压缩。</p>
                        <a href="{{ url_for('pdf_routes.pdf_index') }}" class="btn btn-primary">前往操作</a>
                    </div>
                </div>
            </div>
        
            <!-- 邮件操作卡片 -->
            <div class="col-md-4 col-12">
                <div class="card shadow-sm d-flex flex-column" style="min-height: 250px;">
                    <div class="card-body text-center flex-grow-1">
                        <h5 class="card-title"><i class="fas fa-envelope text-warning"></i>邮件操作</h5>
                        <p class="card-text">管理和自动化您的邮件，例如批量发送或格式化。</p>
                        <a href="{{ url_for('email_routes.email_index') }}" class="btn btn-primary">开始管理</a>
                    </div>
                </div>
            </div>
        
            <!-- 文件查找卡片 -->
            <div class="col-md-4 col-12">
                <div class="card shadow-sm d-flex flex-column" style="min-height: 250px;">
                    <div class="card-body text-center flex-grow-1">
                        <h5 class="card-title"><i class="fas fa-search text-success"></i>文件查找</h5>
                        <p class="card-text">通过关键字快速查找您的重要文件。</p>
                        <a href="{{ url_for('find_routes.find_index') }}" class="btn btn-primary">查找文件</a>
                    </div>
                </div>
            </div>
        
            <!-- Base64编解码 -->
            <div class="col-md-4 col-12">
                <div class="card shadow-sm d-flex flex-column" style="min-height: 250px;">
                    <div class="card-body text-center flex-grow-1">
                        <h5 class="card-title"><i class="fa-solid fa-keyboard"></i>Base64编解码</h5>
                        <p class="card-text">进行快速的Base64编解码，帮助你快人一倍。</p>
                        <a href="{{ url_for('bs_routes.bs_index') }}"  class="btn btn-primary">Base64</a>
                    </div>
                </div>
            </div>
        </div>  
    </div>

        <!-- 重要卡片布局 -->
        <div class="row mt-5 g-4">
            <!-- 文档说明卡片 -->
            <div class="col-md-6">
                <div class="card shadow-sm special-card" style="min-width: 200px;">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i class="fas fa-book text-info"></i>文档说明</h5>
                        <p class="card-text">了解B-Panda的使用文档和常见问题解答。</p>
                        <a href="http://doc.bx33661.com/" class="btn btn-primary">查看文档</a>
                    </div>
                </div>
            </div>
            <!-- B-Panda|网站监控卡片 -->
            <div class="col-md-6">
                <div class="card shadow-sm special-card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><i class="fas fa-desktop text-primary"></i>B-Panda|网站监控</h5>
                        <p class="card-text">监控网站状态，了解性能和健康状况。</p>
                        <a href="http://www.bx33661.com/" class="btn btn-primary">开始监控</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 关于作者 -->
        <div id="about" class="container mt-5 about-section">
            <h2 class="text-center">关于作者</h2>
            <p class="text-center mt-3">大家好，我是BX33661，我们一起见证星辰大海。</p>
            <p class="text-center mt-3">个人博客：<a href="http://www.bx33661.com" target="_blank">www.bx33661.com</a></p>
        </div>

        <!-- 项目介绍 -->
        <div id="projects" class="container mt-5 projects-section">
            <h2 class="text-center">项目介绍</h2>
            <p class="text-center mt-3">这个项目是高级程序设计课程结课作业，由BX33661独立完成。</p>
            <p class="text-center mt-3">这是一个基于Flask框架搭建的Python自动化项目，旨在简化日常任务的自动化处理。项目通过Flask作为后端，结合Python的各种自动化库，实现了任务调度、数据处理与报告生成等功能。技术栈包括Flask、Python等，具有良好的扩展性和易于维护的架构。未来版本将进一步优化用户界面并增加更多自动化功能。</p>
        </div>
    </div>

    <!-- 引入 Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```



bs.html:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base64 编码解码</title>
    <!-- 引入 Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入 Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
            background-size: 300% 300%;
            animation: gradientAnimation 10s ease infinite;
            color: #fff;
            font-family: 'Arial', sans-serif;
        }
        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .container {
            max-width: 800px;
            margin: 3rem auto;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .form-label {
            font-weight: bold;
        }
        .form-select, .form-control {
            border-radius: 0.5rem;
        }
        .btn-primary {
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            border: none;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #2575fc, #6a11cb);
        }
        .btn-secondary {
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            background-color: #f1f1f1;
            border: none;
        }
        .btn-secondary:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>

    <!-- 主容器 -->
    <div class="container">
        <h1 class="text-center text-primary mb-4">Base64 编码解码</h1>

        <!-- 编码部分 -->
        <div class="mb-5">
            <h3>编码</h3>
            <label for="encode_input" class="form-label">输入文本：</label>
            <textarea id="encode_input" class="form-control" rows="4" placeholder="请输入要编码的文本"></textarea>
            <button id="encode_btn" class="btn btn-primary mt-3">开始编码</button>
            <div class="mt-3">
                <label for="encoded_output" class="form-label">编码结果：</label>
                <textarea id="encoded_output" class="form-control" rows="4" readonly placeholder="编码结果会显示在这里"></textarea>
            </div>
        </div>

        <!-- 解码部分 -->
        <div>
            <h3>解码</h3>
            <label for="decode_input" class="form-label">输入Base64字符串：</label>
            <textarea id="decode_input" class="form-control" rows="4" placeholder="请输入Base64字符串"></textarea>
            <button id="decode_btn" class="btn btn-secondary mt-3">开始解码</button>
            <div class="mt-3">
                <label for="decoded_output" class="form-label">解码结果：</label>
                <textarea id="decoded_output" class="form-control" rows="4" readonly placeholder="解码结果会显示在这里"></textarea>
            </div>
        </div>

        <div class="text-center mt-4">
            <a href="{{ url_for('index') }}">返回首页</a>
        </div>
    </div>

    <!-- 引入 Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        document.getElementById('encode_btn').addEventListener('click', function () {
            var inputString = document.getElementById('encode_input').value;
            fetch('/base/encode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input_string: inputString })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('encoded_output').value = data.encoded_string;
            })
            .catch(error => alert('编码失败: ' + error));
        });

        document.getElementById('decode_btn').addEventListener('click', function () {
            var base64String = document.getElementById('decode_input').value;
            fetch('/base/decode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ base64_string: base64String })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('decoded_output').value = data.decoded_string;
            })
            .catch(error => alert('解码失败: ' + error));
        });
    </script>

</body>
</html>

```

