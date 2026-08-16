# Running Healix on Minikube

    minikube start --cpus=4 --memory=8192
    kubectl apply -f ../kubernetes/namespaces/
    kubectl apply -f ../kubernetes/ -R
    minikube service api-gateway -n healix
