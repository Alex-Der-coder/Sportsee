const formatData = (originalData, sessionLengths) => {
  return originalData.map((item, index) => {
    const sessionLengthValue = sessionLengths[index];
    return { ...item, pv: sessionLengthValue };
  });
};

export default formatData;
