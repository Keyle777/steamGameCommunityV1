import random

game_types = ['战略', '动作', '冒险', '角色扮演', '射击', '竞速', '体育', '模拟', '益智', '音乐', '格斗', '解谜', '策略', '恐怖', '生存', '平台', '沙盒', '卡牌', '塔防', '休闲']

num_types = 20

selected_types = random.sample(game_types, num_types)

game_type_data = [{"id": str(i), "name": game_type} for i, game_type in enumerate(selected_types)]

for game_type in game_type_data:
    print(game_type)