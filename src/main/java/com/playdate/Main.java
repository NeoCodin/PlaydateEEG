package com.playdate;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Playdate EEG Processing!");

        // Sample raw EEG data
        List<Double> rawEEGData = Arrays.asList(0.5, 1.2, 0.7, 1.5);

        // Process EEG data
        EEGProcessor processor = new EEGProcessor();
        List<Double> processedData = processor.processData(rawEEGData);

        // Display results
        UIHandler uiHandler = new UIHandler();
        uiHandler.displayResults(processedData);
    }
}
