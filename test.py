# 游戏类型列表
game_types = ["FPS", "RPG", "策略", "冒险", "体育", "竞速", "模拟", "休闲", "战略"]

# 生成包含id的游戏类型对象列表
game_type_objects = [{"id": idx, "name": game_type} for idx, game_type in enumerate(game_types)]

# 打印游戏类型对象列表
for game_type_obj in game_type_objects:
    print(game_type_obj)
