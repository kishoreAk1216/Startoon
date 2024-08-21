import numpy as np
import matplotlib.pyplot as plt

def find_peaks(signal):
    """ Find local maxima and minima in the signal. """
    maxima = []
    minima = []
    n = len(signal)
    
    for i in range(1, n-1):
        if signal[i] > signal[i-1] and signal[i] > signal[i+1]:
            maxima.append(i)
        elif signal[i] < signal[i-1] and signal[i] < signal[i+1]:
            minima.append(i)
    
    return maxima, minima

def load_data(file_path):
    return np.loadtxt(file_path)


file_path_1 = 'Data_1.txt'
file_path_2 = 'Data_2.txt'


data1 = load_data(file_path_1)
data2 = load_data(file_path_2)

maxima1, minima1 = find_peaks(data1)
maxima2, minima2 = find_peaks(data2)

plt.figure(figsize=(12, 6))
plt.plot(data1, label='Signal')
plt.scatter(maxima1, data1[maxima1], color='red', label='Maxima', zorder=5)
plt.scatter(minima1, data1[minima1], color='blue', label='Minima', zorder=5)
plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Signal Peaks and Minima - Dataset 1')
plt.legend()
plt.grid(True)
plt.savefig('plot_dataset_1.png')
plt.show()


plt.figure(figsize=(12, 6))
plt.plot(data2, label='Signal')
plt.scatter(maxima2, data2[maxima2], color='red', label='Maxima', zorder=5)
plt.scatter(minima2, data2[minima2], color='blue', label='Minima', zorder=5)
plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Signal Peaks and Minima - Dataset 2')
plt.legend()
plt.grid(True)
plt.savefig('plot_dataset_2.png')
plt.show()
