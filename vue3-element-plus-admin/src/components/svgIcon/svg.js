const context = require.context('./icon', false, /\.svg$/);
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

requireAll(context);
