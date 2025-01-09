const shouldRenewSubcriptionPlan = (user) => {
  const today = new Date();
  return !user?.nextBillingDate || user?.nextBillingDate <= today;
};

export default shouldRenewSubcriptionPlan;
