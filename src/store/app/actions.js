
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
export const actShowLoading = () => {
  return {
    type: SHOW_LOADING,
    payload: null,
  };
};
export const actHideLoading = () => {
  return {
    type: HIDE_LOADING,
    payload: null,
  };
};
