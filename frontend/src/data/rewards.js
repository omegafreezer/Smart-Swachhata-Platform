const STORAGE_KEY = "smart_swachhata_rewards";

export const getRewards = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data) {
    return JSON.parse(data);
  }

  return {
    points: 0,
    complaints: 0,
  };
};

export const saveRewards = (rewards) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rewards));
};

export const addRewardPoints = (points = 10) => {
  const rewards = getRewards();

  rewards.points += points;
  rewards.complaints += 1;

  saveRewards(rewards);
};

export const resetRewards = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getBadge = (points) => {
  if (points >= 200) return "🏆 Platinum";
  if (points >= 100) return "🥇 Gold";
  if (points >= 50) return "🥈 Silver";
  return "🥉 Bronze";
};