## 重要概念

- `hash pointers`（哈希指针）
  - 一般的指针存放的是结构体在内存中的起始位置。
  - 哈希指针除了要存结构体的地址之外，还要保存这个结构体的哈希值。
  - 这样做的好处是：
    - 不光可以找到这个结构体的位置
    - 还可以知道这个结构体的内容有没有被篡改
- 比特币中最基本的数据结构：区块链
  - 