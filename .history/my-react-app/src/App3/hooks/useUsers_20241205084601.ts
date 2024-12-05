const useUsers = () => {
    useEffect(() => {
        setLoading(true);
        const { request, cancel } = userService.getAllUsers();
        request
          .then((res) => {
            setUsers(res.data);
            setLoading(false);
          })
    
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
    
        return () => cancel();
      }, []);
}

export default useUsers; 