<meta name="referrer" content="no-referrer">

## 利用蓝图模块化

![image-20241203213343338](https://gitee.com/bx33661/image/raw/master/path/image-20241203213343338.png)

> 可以查看flask官方文档：[使用蓝图进行应用模块化 — Flask中文文档(3.0.x) (dormousehole.readthedocs.io)](https://dormousehole.readthedocs.io/en/latest/blueprints.html)

Flask 引入了 *蓝图* 概念。蓝图可以极大地简化大型应用并为扩展提供集中的注册入口。 [`Blueprint`](https://dormousehole.readthedocs.io/en/latest/api.html#flask.Blueprint) 对象与 [`Flask`](https://dormousehole.readthedocs.io/en/latest/api.html#flask.Flask) 应用对象的工作方式类似，但不是 一个真正的应用。它更像一个用于构建和扩展应用的 *蓝图* 。

---

### 拿bs工具举一个例子

```python
bp = Blueprint('bs_routes', __name__, url_prefix='/base')
```

- **Blueprint**: 创建一个新的蓝图实例。
- **'bs_routes'**: 蓝图的名称。
- **name**: 蓝图所在的模块名称。
- **url_prefix='/base'**: 为这个蓝图的所有路由添加一个前缀 `/base`，这样所有路由都会以 `/base` 开头。



例如在蓝图中创建路由：

```python
@bp.route('/', methods=['GET'])
def bs_index():
    return render_template('bs.html')
```

- **@bp.route('/', methods=['GET'])**: 定义一个路由，路径为 `/base/`
- **def bs_index()**: 定义一个视图函数 `bs_index`。
- **render_template('bs.html')**: 渲染 `bs.html` 模板并返回给客户端。



说明一下一些具体功能实现：

就是针对特定功能进行编写

```python
@bp.route('/decode', methods=['POST'])
def decode():
    data = request.json
    base64_string = data.get('base64_string', '')
    if not base64_string:
        flash('请输入有效的Base64字符串进行解码')
        return redirect(url_for('bs_routes.bs_index'))
    decoded_string = decode_base64(base64_string)
    return jsonify({'decoded_string': decoded_string})

```

接受输入--->进行验证-->解码 Base64 字符串--->返回一个 JSON 响应，包含解码后的字符串。